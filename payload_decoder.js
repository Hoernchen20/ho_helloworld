function Decoder(bytes, port) {
    var decoded = {};
    //Batterie
    var batterie = 0.0;
    var in_min = 0;
    var out_min = 2.0;
    var out_max = 4.0;
    var in_max = 0.0;

    if (port == 1) {
        in_max = 255;
        batterie = (bytes[0] - in_min) * ((out_max - out_min) / (in_max - in_min)) + out_min;
        batterie = Math.round(batterie * 1e3) / 1e3;
    } else if (port == 2) {
        in_max = 65535;
        batterie = (((bytes[0] << 8) + bytes[1]) - in_min) * ((out_max - out_min) / (in_max - in_min)) + out_min;
        batterie = Math.round(batterie * 1e3) / 1e3;
    }
    if (batterie < out_min) {
        batterie = out_min;
    } else if (batterie > out_max) {
        batterie = out_max;
    }

    decoded.batterie = batterie;

    return decoded;
}