use locations_edinburgh;
db.dropDatabase();

db.seeds.insertMany([

    businesses = {
        coffee_shops: [
            {
                name: "A typical coffee shack",
                type: "grab-and-go cafe",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "https://st.depositphotos.com/2777531/4560/v/950/depositphotos_45605647-stock-illustration-coffee-booth.jpg",
                    "https://depositphotos.com/45605647/stock-illustration-coffee-booth.html",
                    "creator = vectorfirst"
                ],
                business_description: "A pop-up coffee shop located on Princes Street",
                seating: "No",
                score_for_high_light_level: sum([user_reviews.score_given_for_high_light_level]),
                score_for_low_noise_level: sum([user_reviews.score_given_for_low_noise_level]),
                score_for_adequate_space: sum([user_reviews.score_given_for_adequate_space]),
                score_for_mobility_access: sum([user_reviews.score_given_for_mobility_access]),
                score_for_staff_support: sum([user_reviews.score_given_for_staff_support]),
                score_total: sum([user_reviews.score_given_total]),
                user_reviews: {
                    user_scores: [user_reviews.score_given_total].values(),
                    user_descriptions: [user_reviews.user_comments].values(),
                },
                additional_notes: [

                    "If there is anything extra needed, note it here",
                ]
            },

            {
                name: "A generic coffee shop",
                type: "sit in cafe",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff32805318f2328e90e3b124cd.jpg",
                    "image from https://www.pinterest.co.uk/pin/33847434674745635/",
                    "creator = 棣豆 棣豆"
                ],
                business_description: "A sit in coffee shop found of Cockburn street",
                seating: "Yes",
                score_for_high_light_level: 2,
                score_for_low_noise_level: 4,
                score_for_adequate_space: 5,
                score_for_mobility_access: 3,
                score_for_staff_support: 4,
                score_total: (score_for_light_level + score_for_mobility_access + score_for_noise_level + score_for_space + score_for_staff_support),
                user_reviews: {
                    user_scores: [19, 14, 23],
                    user_descriptions: ["Really enjoyed myself", "The coffee wasn't great", "So glad I discovered this place"]
                },
                notes: [

                    "",

                    "",
                ]
            },

            {

                name: "",
                type: "",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "",
                    "",
                    ""
                ],
                business_description: "",
                seating: "",
                score_for_high_light_level: 5,
                score_for_low_noise_level: 1,
                score_for_adequate_space: 2,
                score_for_mobility_access: 2,
                score_for_staff_support: 1,
                score_total: (score_for_light_level + score_for_mobility_access + score_for_noise_level + score_for_space + score_for_staff_support),
                user_reviews: {
                    user_scores: [],
                    user_descriptions: []
                },
                notes: [

                    "",

                    "",
                ]
            },

        ],

        restaurant: [
            {

                name: "",
                type: "",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "",
                    "",
                    ""
                ],
                business_description: "",
                seating: "",
                score_for_high_light_level: 5,
                score_for_low_noise_level: 1,
                score_for_adequate_space: 2,
                score_for_mobility_access: 2,
                score_for_staff_support: 1,
                score_total: (score_for_light_level + score_for_mobility_access + score_for_noise_level + score_for_space + score_for_staff_support),
                user_reviews: {
                    user_scores: [],
                    user_descriptions: []
                },
                notes: [

                    "",

                    "",
                ]
            },

            {

                name: "",
                type: "",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "",
                    "",
                    ""
                ],
                business_description: "",
                seating: "",
                score_for_high_light_level: 5,
                score_for_low_noise_level: 1,
                score_for_adequate_space: 2,
                score_for_mobility_access: 2,
                score_for_staff_support: 1,
                score_total: (score_for_light_level + score_for_mobility_access + score_for_noise_level + score_for_space + score_for_staff_support),
                user_reviews: {
                    user_scores: [],
                    user_descriptions: []
                },
                notes: [

                    "",

                    "",
                ]
            },

            {

                name: "",
                type: "",
                longitude: 0,
                latitude: 0,
                image_url: [
                    "",
                    "",
                    ""
                ],
                business_description: "",
                seating: "",
                score_for_high_light_level: 5,
                score_for_low_noise_level: 1,
                score_for_adequate_space: 2,
                score_for_mobility_access: 2,
                score_for_staff_support: 1,
                score_total: (score_for_light_level + score_for_mobility_access + score_for_noise_level + score_for_space + score_for_staff_support),
                user_reviews: {
                    user_scores: [],
                    user_descriptions: []
                },
                notes: [

                    "",

                    "",
                ]
            },

        ],
        cinema: [],
        pubs: [],
        shopping_food: [],
        shopping_luxuries: [],
        personal_interest_museums_etc: [],
    },

    user_reviews = {
         location_reviews: [
            {
                business_visited: (businesses.name[0]),
                user_name: "Frank",
                score_given_for_high_light_level: 5,
                score_given_for_low_noise_level: 1,
                score_given_for_adequate_space: 2,
                score_given_for_mobility_access: 2,
                score_given_for_staff_support: 1,
                score_given_total: (score_given_for_light_level + score_given_for_mobility_access + score_given_for_noise_level + score_given_for_space + score_given_for_staff_support),
                user_comments: "Didn't like it very much"
            },
        ]
    }
])