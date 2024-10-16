import React from 'react';

const ResourcePage = () => {
  const resources = [
    { id: 1, title: "E-BOOKS", description: "Get the best and latest e-books to step up you financial knowledge.", link: "#", image: "https://i.pinimg.com/236x/89/1a/de/891ade14dde0db6ca98d69045e092ca5.jpg" },
    { id: 2, title: "COURSES", description: "learn from the best courses online .", link: "#", image: "https://i.pinimg.com/236x/11/a5/36/11a5364f15d24d2e816d016dd142d808.jpg" },
    { id: 3, title: "TUTORIALS", description: "Tutors from all over the worl share their knowledge.", link: "#", image: "https://i.pinimg.com/236x/53/49/d4/5349d43260bc17f2997c543121506fac.jpg" },
    { id: 4, title: "VIDEOS", description: "Youtube videos to help you learn.", link: "#", image: "https://i.pinimg.com/236x/89/34/81/893481b49099773b537d198d284edbd2.jpg" },
    { id: 5, title: "WEBINARS", description: "Get togethers with experts to learn more  .", link: "#", image: "https://i.pinimg.com/enabled_lo/236x/df/9b/33/df9b336dd99759ca6e98400a82365aaa.jpg" },
    { id: 6, title: "ARTICLES", description: "Articles to help you learn more.", link: "#", image: "https://i.pinimg.com/enabled_lo/236x/0a/05/71/0a0571f29b90bd859a1cf186b1110e55.jpg" },
    { id: 7, title: "BLOGS", description: "Blogs to help you learn more.", link: "#", image: "https://i.pinimg.com/236x/fa/eb/78/faeb78db6dbc02afbc6892235aea475e.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-6">
        {resources.map((resource, index) => (
          <div key={resource.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${
            index === 0 ? 'md:col-span-2 md:row-span-1' : 
            index === 3 ? 'md:col-span-2' : ''
          }`}>
            <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a href={resource.link} className="text-blue-500 hover:text-blue-700 font-semibold">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;
