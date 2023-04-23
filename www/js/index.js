var app = {
  // Application Constructor
  initialize: function () {
    document.getElementById('btn').addEventListener('click', app.takephoto);
  },
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },
  takephoto: function () {
    let opts = {
      quality: 80,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      cameraDirection: Camera.Direction.BACK,
    };
    navigator.camera.getPicture(app.ftw, app.wtf, opts);
    app.obtainLocation(); // This calls the obtain location function below
  },
  ftw: function (imgURI) {
    let pic = document.getElementById('photo');
    pic.src = 'data:image/jpeg;base64,' + imgURI;
  },
  wtf: function (msg) {
    document.getElementById('msg').textContent = msg;
  },
  obtainLocation: function () {},

  geolocationSuccess: function (position, msg) {
    // alert(
    //   'Latitude: ' +
    //     position.coords.latitude +
    //     '\n' +
    //     'Longitude: ' +
    //     position.coords.longitude +
    //     '\n' +
    //     'Altitude: ' +
    //     position.coords.altitude +
    //     '\n' +
    //     'Accuracy: ' +
    //     position.coords.accuracy +
    //     '\n' +
    //     'Altitude Accuracy: ' +
    //     position.coords.altitudeAccuracy +
    //     '\n' +
    //     'Heading: ' +
    //     position.coords.heading +
    //     '\n' +
    //     'Speed: ' +
    //     position.coords.speed +
    //     '\n' +
    //     'Timestamp: ' +
    //     position.timestamp +
    //     '\n'
    // );
    msg =
      'Latitude: ' +
      position.coords.latitude +
      '\n' +
      'Longitude: ' +
      position.coords.longitude +
      '\n';

    document.getElementById('msg').textContent = msg;
  },

  geolocationError: function (error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
  },
};

navigator.geolocation.getCurrentPosition(
  app.geolocationSuccess,
  app.geolocationError
);

app.initialize();
