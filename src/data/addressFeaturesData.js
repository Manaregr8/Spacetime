// Example data mapping for dynamic address features

const defaultImages = {
  spaces: [
    { src: "/saket.png" },
    { src: "/panchsheel.png" },
    { src: "/mohan-estate.png" },
    { src: "/connaught-place.png" }
  ]
};

export const addressFeaturesData = {
  default: {
    spacesData: {
      title: "Spaces for every kind of workday",
      items: [
        {
          title: "Complimentary meeting room hours",
          description: "Your meetings matter. With a Spacetime membership, you get complimentary hours that replenish each month, ensuring you always have the perfect space when it's time to connect."
        },
        {
          title: "Bookable Private Offices",
          description: "Need extra space to bring your team together, focus, or collaborate? Book a private office by the day—purposefully designed to support any kind of workday."
        },
        {
          title: "Book at any Spacetime location",
          description: "Traveling? With our network of prime locations, you can stay productive wherever your work takes you."
        }
      ],
      images: defaultImages.spaces
    },
    amenitiesData: {
      title: "Thoughtfully Brewed. Freely Poured.",
      description: "Stay refreshed and fueled throughout your workday with artisanal coffee, a selection of fine teas, and fresh purified water served in our premium lounge spaces.",
      images: [
        "/coffee/ChatGPT Image Aug 3, 2026, 10_44_28 AM.png",
        "/coffee/ChatGPT Image Aug 3, 2026, 10_44_28 AMassa.png",
        "/coffee/ChatGPT Image Aug 3, 2026, 10_44_28 AMsasas.png"
      ]
    },
    moreSolutionsData: {
      virtualMembership: {
        title: "Virtual Membership",
        badge: "For individuals or companies",
        description: "Establish your business in a prime location with a professional mailing address, plus reliable mail retrieval — we'll receive your mail and have it ready whenever you need it. As a virtual member, you can also book meeting rooms at your home location at the member rate.",
        price: "From ₹1,099/mo",
        image: "/homebannerImages/Enhance_office_image_202604020030.webp"
      },
      highlightBanner: {
        title: "The best workplace provider, period.",
        bullets: [
          "Access to prime centers across Delhi-NCR & expanding hubs",
          "All-inclusive amenities",
          "Unparalleled hospitality"
        ]
      },
      videoBlock: {
        title: "No one does flex, coworking, or community like us.",
        description: "Spacetime meets you wherever you are in your professional journey, by design. Whether you're remote-first or office-first, our memberships are curated to help build chemistry with your community, and provide tools to help your business thrive.",
        thumbnail: "/homebannerImages/subtle_networking.webp"
      }
    },
    faqs: {
      "Location & Access": [
        {
          q: "What are the operating hours for this location?",
          a: "Operating hours for this location are 8:00 AM to 8:00 PM, Monday to Saturday."
        },
        {
          q: "Is parking available on-site?",
          a: "Yes, we offer secure, reserved parking for members. Visitor parking is also available subject to availability."
        }
      ],
      "Amenities": [
        {
          q: "What amenities are specific to this location?",
          a: "Beyond our standard premium amenities, this location features coffee, tea & purified water, private phone booths, and high-speed internet."
        }
      ]
    }
  }
};

export function getAddressFeatures(slug) {
  return addressFeaturesData[slug] || addressFeaturesData.default;
}
