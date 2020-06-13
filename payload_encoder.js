function Encoder(object, port) {
    // Encode downlink messages sent as
    // object to an array or buffer of bytes.
    var bytes = [];
  
    if (port === 1) {
      if ( object.resolution === 0 || object.resolution === 1) {
        bytes[0] = object.resolution;
      }
    }
    if (port === 2) {
      if (object.sleep >= 3) {
        bytes[0] = (object.sleep & 0xFF00) >> 8;
        bytes[1] = (object.sleep & 0x00FF);
      }
    }
    if (port === 3) {
      if ( object.reset === 1 ) {
        bytes[0] = object.reset;
      }
    }
    return bytes;
  }