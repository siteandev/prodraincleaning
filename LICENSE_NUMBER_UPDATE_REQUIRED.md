# CRITICAL: Update License Number Before Deployment

## Location

**File:** `src/lib/localServicesSchema.ts`
**Line:** 67
**Current Value:** `'[VERIFY — Insert your actual license number]'`

## What to Do

1. Open `src/lib/localServicesSchema.ts`
2. Find line 67 (in the `license` object)
3. Replace the placeholder with your actual Manitoba plumbing license number

## Before

```typescript
license: {
  '@type': 'Thing',
  name: 'Manitoba Plumbing License',
  identifier: '[VERIFY — Insert your actual license number]',  // ← Line 67
},
```

## After

```typescript
license: {
  '@type': 'Thing',
  name: 'Manitoba Plumbing License',
  identifier: 'YOUR_LICENSE_NUMBER_HERE',  // ← Replace with actual number
},
```

## Example

```typescript
license: {
  '@type': 'Thing',
  name: 'Manitoba Plumbing License',
  identifier: 'PL-2024-12345',  // Example format
},
```

## Why This Matters

- Google Local Services Ads requires verified license information
- This field appears in your LSA profile
- Incorrect or missing license will delay LSA approval
- Must match the license you upload to Google Business Profile

## Next Steps After Updating

1. Update license number in this file
2. Deploy to production
3. Verify phone number in Google Business Profile
4. Upload license documents to Google Business Profile
5. Add service areas to Google Business Profile
6. Enable Local Services Ads

## Questions?

Refer to:
- `LSA_IMPLEMENTATION_GUIDE.md` - Full implementation guide
- `LSA_QUICK_START.md` - Quick reference
- `LSA_IMPLEMENTATION_SUMMARY.md` - Complete summary
