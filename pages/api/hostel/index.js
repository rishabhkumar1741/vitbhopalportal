export default function hostal(req, res) {
    const allProblems = [{
        "sno":1,
        "problemType": "Wifi Problems",
        "url": "/hostel/wifi",
        "img": "/wifi.png"
    },
    {
        "sno":2,
        "problemType": "Electricity Problems",
        "url": "/hostel/electricity",
        "img": "/electricity.png"
    }, 
    {
        "sno":3,
        "problemType": "Plumber Problems",
        "url": "/hostel/plumber",
        "img": "/plumber.png"
    },
    {
        "sno":4,
        "problemType": "Cleaning Problem",
        "url": "/hostel/cleaning",
        "img": "/cleaning.png"
    },
    {
        "sno":5,
        "problemType": "Carpenter Problem",
        "url": "/hostel/carpenter",
        "img": "/carpenter.png"
    },
    {
        "sno":6,
        "problemType": "Mess Problem",
        "url": "/hostel/mess",
        "img": "/mess.png"
    },
]
    res.status(200).json({ data: allProblems})

}