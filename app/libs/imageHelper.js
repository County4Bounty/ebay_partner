export const formatImageUrl = (url, size = 300) => {
  if (!url) return '';
  // If it's a picsum image
  if (url.includes('picsum.photos')) {
    return `${url.replace(/\/$/, '')}/${size}`;
  }
  // If it's an Unsplash image
  if (url.includes('unsplash.com')) {
    return `${url}?auto=format&fit=crop&w=${size}&q=80`;
  }
  // Generic URL
  return url;
};
