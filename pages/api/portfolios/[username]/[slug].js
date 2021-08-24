import portfoliosData from '../../../../data/portfoliosData';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler({ query: { slug, username } }, res) {
  const filtered = portfoliosData.data.filter((exp) => exp.slug === slug);

  if (filtered.length > 0) {
    res.status(200).json({
      status: 'success',
      message: 'Data berhasil ditemukan',
      data: filtered[0],
    });
  } else {
    res.status(404).json({
      message: `Experiences dari ${username} dengan slug ${slug} tidak ditemukan`,
    });
  }
}
