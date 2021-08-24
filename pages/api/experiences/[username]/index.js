import experiencesData from '../../../../data/experiencesData';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  console.log(req);
  res.status(200).json(experiencesData);
}
