import React from 'react';
import Link from 'next/link';

/**
 * Lightweight markdown renderer for blog post bodies.
 *
 * Supported block syntax (blocks are separated by a blank line):
 *   **Heading**            a paragraph that is only bold text becomes an H2 (legacy format)
 *   ## Heading / ### Sub   explicit H2 / H3
 *   - item                 bullet list      1. item   numbered list
 *   | a | b |              table (second row is the separator row)
 *   anything else          paragraph
 * A paragraph whose first line is text and whose following lines are list items
 * renders as a paragraph followed by the list.
 *
 * Supported inline syntax: **bold**, *italic*, [label](/internal-path or https://external).
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

type Block =
  | { type: 'h2' | 'h3'; text: string; id: string }
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] };

const isBullet = (l: string) => /^[-*] /.test(l);
const isNumbered = (l: string) => /^\d+\. /.test(l);

export function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  const used = new Set<string>();
  const uniqueId = (text: string) => {
    let id = slugify(text) || 'section';
    let n = 2;
    const base = id;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    return id;
  };

  for (const raw of content.split('\n\n')) {
    const chunk = raw.trim();
    if (!chunk) continue;
    const lines = chunk.split('\n').map((l) => l.trimEnd());

    // Legacy heading: whole block is a single bold phrase
    if (lines.length === 1 && /^\*\*[^*]+\*\*$/.test(lines[0])) {
      const text = lines[0].replace(/\*\*/g, '').replace(/:$/, '');
      blocks.push({ type: 'h2', text, id: uniqueId(text) });
      continue;
    }
    if (lines.length === 1 && lines[0].startsWith('### ')) {
      const text = lines[0].slice(4);
      blocks.push({ type: 'h3', text, id: uniqueId(text) });
      continue;
    }
    if (lines.length === 1 && lines[0].startsWith('## ')) {
      const text = lines[0].slice(3);
      blocks.push({ type: 'h2', text, id: uniqueId(text) });
      continue;
    }

    // Table
    if (lines[0].startsWith('|') && lines.length >= 2 && /^\|[\s:|-]+\|?$/.test(lines[1])) {
      const cells = (l: string) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      blocks.push({ type: 'table', head: cells(lines[0]), rows: lines.slice(2).map(cells) });
      continue;
    }

    // Split into leading prose + trailing list (or pure list)
    let i = 0;
    while (i < lines.length && !isBullet(lines[i]) && !isNumbered(lines[i])) i++;
    if (i > 0) blocks.push({ type: 'p', text: lines.slice(0, i).join(' ') });
    if (i < lines.length) {
      const ordered = isNumbered(lines[i]);
      const items: string[] = [];
      for (const l of lines.slice(i)) {
        if (isBullet(l) || isNumbered(l)) items.push(l.replace(/^([-*]|\d+\.) /, ''));
        else if (items.length) items[items.length - 1] += ' ' + l.trim();
      }
      blocks.push({ type: ordered ? 'ol' : 'ul', items });
    }
  }
  return blocks;
}

/** Inline formatting: **bold**, *italic*, [label](href) */
export function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(<strong key={k++}>{renderInline(tok.slice(2, -2))}</strong>);
    } else if (tok.startsWith('[')) {
      const label = tok.slice(1, tok.indexOf(']('));
      const href = tok.slice(tok.indexOf('](') + 2, -1);
      const external = /^https?:\/\//.test(href);
      out.push(
        external ? (
          <a key={k++} href={href} target="_blank" rel="noopener noreferrer" className="blog-link">
            {label}
          </a>
        ) : href.startsWith('tel:') || href.startsWith('mailto:') ? (
          <a key={k++} href={href} className="blog-link">
            {label}
          </a>
        ) : (
          <Link key={k++} href={href} className="blog-link">
            {label}
          </Link>
        )
      );
    } else {
      out.push(<em key={k++}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function headingsOf(blocks: Block[]) {
  return blocks.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');
}

const pStyle: React.CSSProperties = { color: 'var(--ink)' };

/** Renders parsed blocks. `afterIndex` lets the caller inject a CTA after a given block. */
export function RenderBlocks({
  blocks,
  injectAfter,
  inject,
}: {
  blocks: Block[];
  injectAfter?: number;
  inject?: React.ReactNode;
}) {
  return (
    <>
      {blocks.map((b, i) => {
        let el: React.ReactNode;
        switch (b.type) {
          case 'h2':
            el = (
              <h2 id={b.id} className="mt-10 mb-4 scroll-mt-28">
                {b.text}
              </h2>
            );
            break;
          case 'h3':
            el = (
              <h3 id={b.id} className="mt-6 mb-3 text-xl font-bold scroll-mt-28" style={{ color: 'var(--navy-900)' }}>
                {b.text}
              </h3>
            );
            break;
          case 'ul':
            el = (
              <ul className="mb-5 pl-6 list-disc flex flex-col gap-2" style={pStyle}>
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed">
                    {renderInline(it)}
                  </li>
                ))}
              </ul>
            );
            break;
          case 'ol':
            el = (
              <ol className="mb-5 pl-6 list-decimal flex flex-col gap-2" style={pStyle}>
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed">
                    {renderInline(it)}
                  </li>
                ))}
              </ol>
            );
            break;
          case 'table':
            el = (
              <div className="mb-6 overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ color: 'var(--ink)' }}>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th
                          key={j}
                          scope="col"
                          className="text-left p-3 border-b-2 font-bold"
                          style={{ borderColor: 'var(--navy-700)', backgroundColor: 'var(--navy-100)' }}
                        >
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k} className="p-3 border-b align-top" style={{ borderColor: 'var(--line)' }}>
                            {renderInline(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            break;
          default:
            el = (
              <p className="mb-4 leading-relaxed" style={pStyle}>
                {renderInline(b.text)}
              </p>
            );
        }
        return (
          <React.Fragment key={i}>
            {el}
            {injectAfter === i ? inject : null}
          </React.Fragment>
        );
      })}
    </>
  );
}
