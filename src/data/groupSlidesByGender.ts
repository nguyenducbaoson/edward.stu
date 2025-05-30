import slidesData from './navListData';

export const groupSlidesByGender = () => {
  return slidesData.reduce((acc, item) => {
    const key = item.gender;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof slidesData>);
};