#include "scaling.h"

float scaling_float(float in, float in_min, float in_max, float out_min, float out_max, LimitType limit) {
    // protect against divide by zero
    if ((in_max - in_min) == 0.0) {
        return 0.0;
    }

    float out = (in - in_min) * ((out_max - out_min) / (in_max - in_min)) + out_min;

    if (limit == LIMIT_OUTPUT) {
        if (out < out_min) {
            return out_min;
        } else if (out > out_max) {
            return out_max;
        } else {
            return out;
        }
    } else {
        return out;
    }
}
