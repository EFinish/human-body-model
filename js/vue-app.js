var app = new Vue({
    el : "#human-body-app",
    props: {
        measurements: {
            length: {
                right_arm: {
                    shoulder_to_bicep_tri: 0,
                    bicep_tri_to_elbow: 0,
                    elbow_to_forearm: 0,
                    forearm_to_wrist: 0
                },
                left_arm: {
                    shoulder_to_bicep_tri: 0,
                    bicep_tri_to_elbow: 0,
                    elbow_to_forearm: 0,
                    forearm_to_wrist: 0
                },
                mid_body:{
                    hip_to_waist: 0,
                    waist_to_chest: 0,
                    chest_to_collar: 0,
                    collar_to_shoulder: 0
                },
                right_leg: {
                    hip_to_inner_thigh: 0,
                    inner_thigh_to_knee: 0,
                    knee_to_calf: 0,
                    calf_to_achilles: 0
                },
                left_leg: {
                    hip_to_inner_thigh: 0,
                    inner_thigh_to_knee: 0,
                    knee_to_calf: 0,
                    calf_to_achilles: 0
                }
                
            },
            circumference: {
                right_arm: {
                    bicep_tri: 0,
                    elbow: 0,
                    forearm: 0
                },
                left_arm: {
                    bicep_tri: 0,
                    elbow: 0,
                    forearm: 0
                },
                mid_body:{
                    hip: 0,
                    waist: 0,
                    chest: 0
                },
                right_leg: {
                    inner_thigh: 0,
                    knee: 0,
                    calf: 0,
                    achilles: 0
                },
                left_leg: {
                    inner_thigh: 0,
                    knee: 0,
                    calf: 0,
                    achilles: 0
                }
            }
        },
    }
})