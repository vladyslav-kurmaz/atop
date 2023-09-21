

const preloaderFunk = (setState: (num: number) => void) => {

  const images = document.getElementsByTagName('img');
  const totalImages = images.length;
  let loadedImages = 0;

  if (totalImages === 0) {
    setState(100); // Якщо немає зображень, встановлюємо 100%
    return;
  }

  for (let i = 0; i < totalImages; i++) {
    const image = new Image();
    image.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        const percentage = (loadedImages / totalImages) * 100;
        setState(percentage); // Оновлюємо стан компонента з відсотком
      }
    };
    image.src = images[i].src;
  }
  
}

export default preloaderFunk;