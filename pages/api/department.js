export default function handler(req, res) {
    const data = [
        {
            "key":1,
            "course_name":"B.Tech. Programme",
            "Img":"B.Tech.jpg",
            "fullform":""
        },
        {
            "key":2,
            "course_name":"B.Arch",
            "Img":"B.Arch.jpg"
        },
        {
            "key":3,
            "course_name":"BBA",
            "Img":"BBA.jpg"
        },
        {
            "key":4,
            "course_name":"MBA",
            "Img":"MBA.jpg"
        },
        {
            "key":5,
            "course_name":"Integrated M.Sc. Biotechnology Programme ",
            "Img":"M.Sc.jpg"
        },
        {
            "key":6,
            "course_name":"M.Tech. Programme",
            "Img":"M.Tech.jpg"
        },
        {
            "key":7,
            "course_name":"Integrated M.Tech. Programme",
            "Img":"Integrated_M.Tech.jpg"
        },
        {
            "key":8,
            "course_name":"Master of Computer Application",
            "Img":"MCA-1.jpg"
        },
        {
            "key":9,
            "course_name":"ph.D Programme",
            "Img":"ph.d.jpg"
        },
        ]
 
    
    
    
    
      res.status(200).json({data: data })
    
      // Handle any other HTTP method
    
  }