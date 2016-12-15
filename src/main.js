/* eslint-env browser */

class Sound {
  constructor (options) {
    Object.assign(this, options);
    this.load();
  }

  buttonClickHandler (event) {
    event.target.parentNode.querySelector('audio').play();
  }

  load () {
    const promise = fetch('static/' + this.path + '.mp3')
      .then(response => response.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(blobUrl => {
        Object.assign(this, { blobUrl });

        return this;
      });

    return promise;
  }

  getMarkup () {
    const { name, blobUrl } = this;

    return `<audio src="${blobUrl}" preload></audio><button>${name}</button>`;
  }

  getMarkupAsElement () {
    const newDiv = document.createElement('div');

    newDiv.className = 'sound-wrapper';
    newDiv.innerHTML = this.getMarkup();

    newDiv.querySelector('button').addEventListener('click', this.buttonClickHandler, false);

    return newDiv;
  }
}

const sounds = [
  new Sound({
    path: 'der-odela-han-klippern',
    name: 'Der ødela han klipperen 🤖'
  }),
  new Sound({
    path: 'fy-skamme-deg',
    name: 'Fy skamme deg (ding ding, shame 🔔)'
  }),
  new Sound({
    path: 'kick-da-klipper',
    name: 'Kicka da klipper 💥'
  }),
  new Sound({
    path: 'neei',
    name: 'Neei... 😔'
  }),
  new Sound({
    path: 'oyvind-ma-du-se',
    name: 'Øyvind må du se! 👀'
  }),
  new Sound({
    path: 'dying-klipper',
    name: '🚨 Klipper dying 💀'
  }),
  new Sound({
    path: 'tomma-tradet-pa-applen',
    name: 'Han tommer trærne for epler 🌳🍎'
  })
];

function stopLoading () {
  document.body.classList.add('loaded');
}

const promises = sounds.map(sound => sound.load());

Promise.all(promises).then(loadedSounds => {
  return loadedSounds.map(loadedSound => loadedSound.getMarkupAsElement());
}).then(elementsToAdd => {
  elementsToAdd.forEach(newChild => {
    document.querySelector('#soundboard').appendChild(newChild);
    stopLoading();
  });
});
