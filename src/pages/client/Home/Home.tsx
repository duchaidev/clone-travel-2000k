import { Container, Product } from "src/components";

const activitiData = [
  {
    title: "1. Skydivie",
    img: "imgTest/test1.webp",
    activiti: "5"
  },
  {
    title: "2. Up at the O2",
    img: "imgTest/test2.webp",
    activiti: "1"
  },
  {
    title: "3. Meteora",
    img: "imgTest/test3.webp",
    activiti: "10"
  },
  {
    title: "4. Underwater",
    img: "imgTest/test4.webp",
    activiti: "18"
  }
];

const cityData = [
  {
    name: "Lodon",
    img: "city/city1.jpg"
  },
  {
    name: "Boston",
    img: "city/city2.jpg"
  },
  {
    name: "Amsterdam",
    img: "city/city3.jpg"
  },
  {
    name: "New York",
    img: "city/city4.jpg"
  },
  {
    name: "Stutgar",
    img: "city/city5.jpg"
  },
  {
    name: "Berlin",
    img: "city/city6.jpg"
  }
];

function Home() {
  return (
    <Container className="my-20">
      <section className="text-text">
        <h3 className="text-3xl font-bold">Unforgettable sports experiences</h3>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {new Array(8).fill(0).map((_) => {
            return (
              <div className="col-span-1">
                <Product />
              </div>
            );
          })}
        </div>
      </section>
      <section className="text-text mt-10">
        <h3 className="text-3xl font-bold">Top sports sights you can't miss</h3>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {activitiData.map((item, index) => {
            return (
              <div key={index} className="col-span-1 relative">
                <div className="absolute top-2 left-2 z-30">
                  <span className="text-xl text-white bg-text font-semibold inline-block px-2 py-1 rounded-md">
                    {item.title}
                  </span>
                  <p className="px-2 py-1 rounded-b-md text-sm bg-white text-text w-fit font-normal">
                    {item.activiti} activities
                  </p>
                </div>
                <div className="group rounded-lg">
                  <div className="h-[200px] w-full overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover group-hover:scale-125 transition-all rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="text-text mt-10">
        <h3 className="text-3xl font-bold">Awe-inspiring sports around the world</h3>
        <div className="grid grid-cols-6 gap-4 mt-6">
          {cityData.map((item, index) => {
            return (
              <div key={index} className="col-span-1 relative">
                <div className="h-[200px] w-full overflow-hidden rounded-lg group">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-125 transition-all" />
                  <div className="absolute bottom-0 left-0 pt-4 pl-4 pb-2 w-full bg-gradient-to-t from-slate-800 to-transparent rounded-b-lg">
                    <p className="text-white text-lg font-bold m-0">{item.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}

export default Home;
