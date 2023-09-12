export const transformData = (data) => {
  const tranformedData = data.map((courseData) => {
    const instructorInfo = courseData.visible_instructors[0];
    return {
      id: courseData.id,
      title: courseData.title,
      published_title: courseData.published_title,
      headline: courseData.headline,
      instructor: {
        name: instructorInfo.display_name,
        image: {
          small: instructorInfo.image_50x50,
          large: instructorInfo.image_100x100,
        },
        job: instructorInfo.job_title,
      },
      url: courseData.url,
      price: courseData.price,
      is_paid: courseData.is_paid,
      image: {
        small: courseData.image_125_H,
        medium: courseData.image_240x135,
        large: courseData.image_480x270,
      },
    };
  });
  return tranformedData;
};

// export const Paginate = (data) => {
//   const itemPerPage = 6;
//   const numberOfPages = Math.ceil(data.length / itemPerPage);
//   ...
// };
