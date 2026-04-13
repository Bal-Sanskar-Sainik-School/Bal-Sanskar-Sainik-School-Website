export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Bal Sansar Sainik School",
    "alternateName": "BSSS Jeolikot",
    "description": "Best school in Jeolikot, Nainital. Uttarakhand State Board private school offering Classes 1-8. Not a military or army school. 100% results, modern facilities.",
    "url": "https://balsansarsainikschool.com",
    "logo": "https://balsansarsainikschool.com/images/logo/logo.jpeg",
    "image": "https://balsansarsainikschool.com/images/logo/logo.jpeg",
    "foundingDate": "2008",
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
      "latitude": "29.3803",
      "longitude": "79.5241"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9410107811",
      "contactType": "Admissions",
      "areaServed": ["Jeolikot", "Nainital", "Bhowali", "Uttarakhand"],
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://balsansarsainikschool.com"
    ],
    "priceRange": "₹₹",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Primary Education (Classes 1-5)",
            "description": "Uttarakhand State Board curriculum for primary classes in Jeolikot",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Bal Sansar Sainik School"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Middle School Education (Classes 6-8)",
            "description": "Uttarakhand State Board curriculum for middle school in Jeolikot",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Bal Sansar Sainik School"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jeolikot, Nainital, Bhowali, Uttarakhand"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Bal Sansar Sainik School located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bal Sansar Sainik School is located in Jeolikot, Nainital, Uttarakhand - 263136. We are in the Himalayan region, easily accessible from Nainital city."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bal Sansar Sainik School a military school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Bal Sansar Sainik School is NOT a military or army school. We are a private school affiliated with Uttarakhand State Board."
        }
      },
      {
        "@type": "Question",
        "name": "Which board is Bal Sansar Sainik School affiliated with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bal Sansar Sainik School is affiliated with the Uttarakhand State Board (UK Board). UDISE Code: 05110307811."
        }
      },
      {
        "@type": "Question",
        "name": "What classes are offered at Bal Sansar Sainik School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer education from Class 1 to Class 8 following Uttarakhand State Board curriculum."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
