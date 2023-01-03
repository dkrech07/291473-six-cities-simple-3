import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    title,
    description,
    createdDate,
    city,
    previewImagePath,
    detailImagePath,
    premium,
    rating,
    housingType,
    roomsNumber,
    guestsNuber,
    rentPrice,
    amenities,
    name,
    email,
    avatarPath,
    password,
    type,
    commentsCount,
    coordinates] = tokens;
  return {
    title,
    description,
    postDate: new Date(createdDate),
    city,
    previewImagePath,
    detailImagePath: detailImagePath.split(';'),
    premium: premium === 'true',
    rating: Number(rating),
    housingType,
    roomsNumber: Number(roomsNumber),
    guestsNuber: Number(guestsNuber),
    rentPrice: Number(rentPrice),
    amenities: amenities.split(';'),
    user: {
      name,
      email,
      avatarPath,
      password,
      type
    },
    commentsCount: Number(commentsCount),
    coordinates: {
      latitude: coordinates.split(';')[0],
      longitude: coordinates.split(';')[1]
    }
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';