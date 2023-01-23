export default function handler(req, res) {
    const data = [
        {
          "key": 1,
          "course_name": "College",
          "Img": "B.Tech.jpg",
          "fullform":"Bachelor of Technology",
          "url":"/hostel"
          
        },
        {
          "key": 2,
          "course_name": "B.Arch",
          "Img": "B.Arch.jpg",
          "fullform":"Bachelor of Architecture",
          "url":"/"
        },
        {
          "key": 3,
          "course_name": "BBA",
          "Img": "BBA.jpg",
          "fullform":"Bachelor of Business Administration",
          "url":"/"
        },
        {
          "key": 4,
          "course_name": "MBA",
          "Img": "MBA.jpg",
          "fullform":"Master of Business Administration",
          "url":"/"
        },
        {
          "key": 5,
          "course_name": "Integrated M.Sc. Biotechnology Programme ",
          "Img": "M.Sc.jpg",
          "fullform":"Master of Science",
          "url":"/"
        },
        {
          "key": 6,
          "course_name": "M.Tech. Programme",
          "Img": "M.Tech.jpg",
          "fullform":"Master of Technology",
          "url":"/"
        },
        {
          "key": 7,
          "course_name": "Integrated M.Tech. Programme",
          "Img": "Integrated_M.Tech.jpg",
          "fullform":"Master of Technology",
          "url":"/"
        },
        {
          "key": 8,
          "course_name": "MCA",
          "Img": "MCA-1.jpg",
          "fullform":"Masters in Computer Application",
          "url":"/"
        },
        {
          "key": 9,
          "course_name": "ph.D Programme",
          "Img": "ph.d.jpg",
          "fullform":"Doctor of Philosophy",
          "url":"/"
        },
      ]
      res.status(200).json({data: data })
    
     
    
  }

