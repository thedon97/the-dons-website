# The Don Jewelers & Jewelry

Production-ready website for a private jeweler specializing in custom jewelry, engagement rings, diamond jewelry, and nationwide shipping.

## Production Deployment

1. Upload or push the project root to GitHub.
2. Import the repository into your hosting dashboard.
3. Use the default project settings.
4. Build command: `npm run build`
5. Output directory: `.`
6. Go to Settings > Environment Variables.
7. Add or update the three LGD environment variables listed below for Production, Preview, and Development.
8. Go to Deployments.
9. Open the three-dot menu on the latest deployment.
10. Click Redeploy.
11. Turn off "Use existing Build Cache."
12. Redeploy and test the live diamond page.

## Environment Variables

For the live Labgrown Diamond inventory, add this in Project Settings > Environment Variables:

```text
LGD_API_KEY=your_private_lgd_api_key
LGD_CERTIFIED_URL=https://lgdusallc.com/developer-api/diamond?type=certified
LGD_CERTIFIED_COLOR_URL=https://lgdusallc.com/developer-api/diamond?type=certified_color
```

Do not commit real `.env` files or private API keys.

The website frontend calls only these server-side routes. The server-side routes call LGD and keep the key private:

- `/api/diamonds/certified`
- `/api/diamonds/certified-color`
- `/api/test-diamond-api`

## Included Compliance Pages

- Refund & Return Policy
- Payment Policy
- Shipping Policy
- Custom Order Policy
- Warranty Policy
- Terms & Conditions
- Privacy Policy
- Financing Policy

Policy links are available in the footer and checkout support area.
