export default function LocalBusinessSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Bal Sansar Sainik School",
    "image": "https://balsansarsainikschool.com/images/logo/logo.jpeg",
    "description": "Best school in Jeolikot, Nainital. Uttarakhand State Board private school offering Classes 1-8. Not a military school.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jeolikot",
      "addressLocality": "Jeolikot",
      "addressRegion": "Uttarakhand",
      "postalCode": "263136",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.3803,
      "longitude": 79.5241
    },
    "url": "https://balsansarsainikschool.com",
    "telephone": "+91-9410107811",
    "email": "balsansarsainikschool@gmail.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Jeolikot"
      },
      {
        "@type": "City",
        "name": "Nainital"
      },
      {
        "@type": "City",
        "name": "Bhowali"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
