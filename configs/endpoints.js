const endPoint = {
  experiences(username) {
    return `http://localhost:3000/api/experiences/${username}`;
  },
  experiencesDetail(username, slug) {
    return `http://localhost:3000/api/experiences/${username}/${slug}`;
  },
};

export default endPoint;
