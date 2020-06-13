#ifndef SCALING_H_
#define SCALING_H_

#include "stdint.h"

typedef enum {
    UNLIMIT_OUTPUT,
    LIMIT_OUTPUT
} LimitType;

float scaling_float(float in, float in_min, float in_max, float out_min, float out_max, LimitType limit);

#endif /* SCALING_H_ */
