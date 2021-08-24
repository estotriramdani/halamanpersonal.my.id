import achievementsData from '../../../../data/achievementsData';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  res.status(200).json(achievementsData);
}
