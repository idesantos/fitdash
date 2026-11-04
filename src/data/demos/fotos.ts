// Fotos do Pexels (licença livre para uso comercial). pNNNN.jpg = pexels.com/photo/NNNN
const todas = import.meta.glob<ImageMetadata>('../../assets/demos/fotos/*.jpg', { eager: true, import: 'default' });

export const f = (id: number | string): ImageMetadata => {
  const foto = todas[`../../assets/demos/fotos/p${id}.jpg`];
  if (!foto) throw new Error(`Foto p${id}.jpg não encontrada`);
  return foto;
};
