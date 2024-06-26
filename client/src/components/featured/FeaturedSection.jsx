import React, { useState, useEffect } from "react";

const dummyBlogs = [
  [
    {
      id: 1,
      title: "Time to disrupt dev",
      description: "Its high time we need to bring in new tools to disrupt the tech industry and change how we use tech in our lives and get ahead with them",
    },
    {
      id: 2,
      title: "Quantum Computing: Revolutionizing Future Technologies",
      description: "Explore quantum computing's potential to transform industries and solve complex problems.",
    },
    
  ],
  [
    {
      id: 1,
      title: "Blockchain: Securing Transactions with Distributed Ledger Technology",
      description: "Delve into the decentralized world of blockchain, its applications, and impact on finance and beyond.",
    },
    {
      id: 2,
      title: "Augmented Reality: Bridging Real and Virtual Worlds",
      description: "Discover how AR is reshaping interactions, entertainment, and education with immersive experiences.",
    }
    
  ],
  [
    {
      id: 1,
      title: "Artificial Intelligence: Powering Innovation Across Industries",
      description: "Uncover AI's role in driving automation, personalization, and breakthroughs in healthcare, finance, and more.",
    },
    {
      id: 2,
      title: "5G Networks: Transforming Connectivity and Communication",
      description: "Learn how 5G is revolutionizing mobile technology, IoT, and enabling new possibilities in communication infrastructure.",
    }
  ]
];


const dummyDiscussions = [
  [
    {
      id: 1,
      title: "Time to disrupt dev",
      description: "Its high time we need to bring in new tools to disrupt the tech industry and change how we use tech in our lives and get ahead with them",
    },
    {
      id: 2,
      title: "Quantum Computing: Revolutionizing Future Technologies",
      description: "Explore quantum computing's potential to transform industries and solve complex problems.",
    },
    
  ],
  [
    {
      id: 1,
      title: "Meri internship kyun nahi lag rahi bhagwan uthaleee",
      description: "Hey bhagwan uthale re uthale , mujhe nahi iss college aur iski placement commitee ko",
    },
    {
      id: 2,
      title: "Ye aye VC ne 75% attendance par affidavit lagane se mana kyuu kar diya",
      description: "l*deeee lag gaye yarooo",
    }
    
  ],
  [
    {
      id: 1,
      title: "Artificial Intelligence: Powering Innovation Across Industries",
      description: "Uncover AI's role in driving automation, personalization, and breakthroughs in healthcare, finance, and more.",
    },
    {
      id: 2,
      title: "5G Networks: Transforming Connectivity and Communication",
      description: "Learn how 5G is revolutionizing mobile technology, IoT, and enabling new possibilities in communication infrastructure.",
    }
  ]
];

function FeaturedSection(props) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPairIndex((prevIndex) => (prevIndex === dummyBlogs.length - 1 ? 0 : prevIndex + 1));
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-[7%] bg-black">
      <div className="text-sm text-sky-500 uppercase max-md:max-w-full ml-[2.49rem] font-extrabold">
                🌟 {props.name}
              </div>
      <div key={currentPairIndex} className="flex md:gap-2 mt-0 gap-0 flex-col-reverse md:flex-row pb-4">
        {dummyDiscussions[currentPairIndex].map((blog, index) => (
          <div key={index} className="flex pb-8 px-5 rounded-lg gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full ">
            <div className="flex text-start flex-col px-5 font-semibold max-md:max-w-full bg-neutral-80 text-white">
              
              <div className="mt-2 md:text-[2.5rem] text-3xl font-extrabold text-start space-around tracking-tight leading-12 max-md:max-w-full max-md:text-4xl max-md:leading-10 ">
                {blog.title}
              </div>
              <div className="text-xl text-start mt-7 space-around tracking-tight leading-12 md:max-w-full md:text-xl max-md:leading-10 font-light text-gray-400">
                " {blog.description} "
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default FeaturedSection;
