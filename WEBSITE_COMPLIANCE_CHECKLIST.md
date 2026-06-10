# Website Compliance Checklist

Business: The Don Jewelers & Jewelry  
Phone: 484-761-2008  
Email: thedonjewelersandjewelry@gmail.com  
Service area: Pennsylvania, New Jersey, New York, and nationwide shipping

## Policy Pages Created

- Refund & Return Policy
- Payment Policy
- Shipping Policy
- Custom Order Policy
- Warranty Policy
- Terms & Conditions
- Privacy Policy
- Financing Policy

## Website Links Added

- Footer policy links added for all policy pages.
- Checkout support policy links added for all policy pages.
- Terms route preserved at `#/terms`.
- Policy routes added:
  - `#/refund-return-policy`
  - `#/payment-policy`
  - `#/shipping-policy`
  - `#/custom-order-policy`
  - `#/warranty-policy`
  - `#/privacy-policy`
  - `#/financing-policy`

## Stripe-Friendly Requirements Completed

- Clear refund and return rules.
- Clear payment and order confirmation rules.
- Clear custom order final-sale language.
- Clear shipping, signature, and carrier-delay language.
- Clear warranty exclusions.
- Clear third-party financing responsibility language.
- Privacy policy explains payment processors, shipping carriers, financing providers, fraud tools, and service providers.
- Policy links are available from checkout before customer submission.

## GitHub and Production Readiness

- Root `index.html`, `main.js`, `styles.css`, `package.json`, `package-lock.json`, `preview-server.js`, and image files are present.
- Production routing config is present for SPA routing.
- `.gitignore` excludes `.env`, caches, `node_modules`, logs, and zip exports.
- No private API keys should be committed.

## Remaining Items Before Going Live

- Add real production environment variables in the hosting dashboard for any private APIs, including `LGD_API_KEY`, `LGD_CERTIFIED_URL`, and `LGD_CERTIFIED_COLOR_URL` if the live diamond API is used.
- Confirm Stripe account settings, payment links, statement descriptor, fulfillment timing, and refund settings inside Stripe.
- Confirm business address, tax settings, shipping zones, and any required state or local compliance obligations with a qualified professional.
- Test a full checkout/payment flow in production before taking customer payments.
- Review policies with a qualified attorney if formal legal advice is required.
