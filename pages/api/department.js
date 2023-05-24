export default function handler(req, res) {
  const data = [
    {
      key: 1,
      Img: "hostel.png",
      fullform: "Hostel",
      url: "/hostel",
    },
    {
      key: 2,
      Img: "univ.png",
      fullform: "Academic Block",
      url: "/academic",
    },
    {
      key: 3,
      Img: "it.png",
      fullform: "IT Department",
      url: "/hostel",
    },
    {
      key: 4,
      Img: "mess.png",
      fullform: "Mess",
      url: "/mess",
    },
    {
      key: 5,

      Img: "canteen.jpg",
      fullform: "Under Belly",
      url: "/ub",
    },
    {
      key: 6,

      Img: "library.png",
      fullform: "Library",
      url: "/collegelibrary",
    },
  ];
  res.status(200).json({ data: data });
}
