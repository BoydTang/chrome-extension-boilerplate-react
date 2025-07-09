const handles = [
  'aftership-hoddies-pullover-blue',
  'aftership-hoddies-zipper-blue',
  'aftership-short-tee-black',
  'aftership-short-tee-blue',
  'aftership-short-tee-grey',
  'aftership-short-tee-white',
  'returns-center-stickers-type-2',
  'data-nerd-sticker-type-1',
  'new-relic-sticker-type-2',
  'new-relic-sticker-type-3',
  'tommy-badge-t-shirt',
];

const headers = [
  'product_handle',
  'rating',
  'author',
  'title',
  'content',
  'author_country',
  'author_email',
  'commented_at',
  'photo_url_1',
  'photo_url_2',
  'photo_url_3',
  'photo_url_4',
  'photo_url_5',
  'photo_url_6',
  'video_url_1',
  'video_url_2',
  'video_url_3',
  'video_url_4',
  'video_url_5',
  'video_url_6',
  'status',
];

const single_product_reviews_count = 2; // 每个 handle 生成的评论数量

const generateReview = (handle) => {
  const reviews = [];
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    let value = '';
    switch (header) {
      case 'product_handle':
        value = handle;
        break;
      case 'rating':
        value = Math.floor(Math.random() * 5) + 1; // 1-5 星
        break;
      case 'author':
        value = `User${Math.floor(Math.random() * 1000)}`;
        break;
      case 'title':
        value = `Review Title ${Math.floor(Math.random() * 100)}`;
        break;
      case 'content':
        value = `This is a review content for ${handle}.`;
        break;
      case 'author_country':
        value = 'USA';
        break;
      case 'author_email':
        value = `user${Math.floor(Math.random() * 1000)}@example.com`;
        break;
      case 'commented_at':
        value = new Date().toISOString();
        break;
      case 'photo_url_1':
      case 'photo_url_2':
      case 'photo_url_3':
      case 'photo_url_4':
      case 'photo_url_5':
      case 'photo_url_6':
        value = ``; // 可以填入实际的图片 URL
        break;
      case 'video_url_1':
      case 'video_url_2':
      case 'video_url_3':
      case 'video_url_4':
      case 'video_url_5':
      case 'video_url_6':
        value = ``; // 可以填入实际的视频 URL
        break;
      case 'status':
        value = Math.random() > 0.5 ? 'published' : 'unpublished';
        break;
    }
    reviews.push(value);
  }
  return reviews;
};
const generateReviews = (count = single_product_reviews_count) => {
  const reviewsBody = [];
  // 每个 handle 生成 1000 条评论
  for (let i = 0; i < handles.length; i++) {
    const handle = handles[i];
    const handleReviews = [];
    for (let j = 0; j < count; j++) {
      // 生成评论内容
      const review = generateReview(handle);
      handleReviews.push(review);
    }
    reviewsBody.push(handleReviews);
  }
  return reviewsBody;
};

const generateCSV = (count) => {
  const reviewsBody = generateReviews(count)?.flat();
  console.log(`------------> reviewsBody total lines`, reviewsBody?.length);
  const content = [headers, ...reviewsBody]
    .map((row) => row.join(','))
    .join('\n');
  return content;
};

export {
  generateCSV,
  generateReviews,
  generateReview,
  handles,
  headers,
  single_product_reviews_count,
};
