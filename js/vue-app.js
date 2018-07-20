var app = new Vue({
    el : "#human-body-app",
    data: function(){
        return {
            measurements: {
                lengths: {
                    right_arm: {
                        name: "Right Arm",
                        body_parts: {
                            shoulder_to_bicep_tri: {
                                value: 0,
                                name: "Shoulder to Bicep"
                            },
                            bicep_tri_to_elbow: {
                                value: 0,
                                name: "Bicep to Tri"
                            },
                            elbow_to_forearm: {
                                value: 0,
                                name: "Elbow to Forearm"
                            },
                            forearm_to_wrist: {
                                value: 0,
                                name: "Forearm to Wrist"
                            }
                        }
                    },
                    left_arm: {
                        name: "Left Arm",
                        body_parts: {
                            shoulder_to_bicep_tri: {
                                value: 0,
                                name: "Shoulder to Bicep"
                            },
                            bicep_tri_to_elbow: {
                                value: 0,
                                name: "Bicep to Tri"
                            },
                            elbow_to_forearm: {
                                value: 0,
                                name: "Elbow to Forearm"
                            },
                            forearm_to_wrist: {
                                value: 0,
                                name: "Forearm to Wrist"
                            }
                        }
                    },
                    mid_body:{
                        name: "Mid Body",
                        body_parts: {
                            hip_to_waist: {
                                value: 0,
                                name: "Hip to Waist"
                            },
                            waist_to_chest: {
                                value: 0,
                                name: "Waist to Chest"
                            },
                            chest_to_collar: {
                                value: 0,
                                name: "Chest to Collar"
                            },
                            collar_to_shoulder: {
                                value: 0,
                                name: "Collar to Shoulder"
                            }
                        }
                    },
                    right_leg: {
                        name: "Right Leg",
                        body_parts: {
                            hip_to_inner_thigh: {
                                value: 0,
                                name: "Hip to Inner Thigh"
                            },
                            inner_thigh_to_knee: {
                                value: 0,
                                name: "Inner Thigh to Knee"
                            },
                            knee_to_calf: {
                                value: 0,
                                name: "Knee to Calf"
                            },
                            calf_to_achilles: {
                                value: 0,
                                name: "Calf to Achilles"
                            }
                        }
                    },
                    left_leg: {
                        name: "Left Leg",
                        body_parts: {
                            hip_to_inner_thigh: {
                                value: 0,
                                name: "Hip to Inner Thigh"
                            },
                            inner_thigh_to_knee: {
                                value: 0,
                                name: "Inner Thigh to Knee"
                            },
                            knee_to_calf: {
                                value: 0,
                                name: "Knee to Calf"
                            },
                            calf_to_achilles: {
                                value: 0,
                                name: "Calf to Achilles"
                            }
                        }
                    }
                    
                },
                circumference: {
                    right_arm: {
                        name: "Right Arm",
                        body_parts: {
                            bicep_tri: {
                                value: 0,
                                name: "Bicep and Tri"
                            },
                            elbow: {
                                value: 0,
                                name: "Elbow"
                            },
                            forearm: {
                                value: 0,
                                name: "Forearm"
                            }
                        }
                    },
                    left_arm: {
                        name: "Left Arm",
                        body_parts: {
                            bicep_tri: {
                                value: 0,
                                name: "Bicep and Tri"
                            },
                            elbow: {
                                value: 0,
                                name: "Elbow"
                            },
                            forearm: {
                                value: 0,
                                name: "Forearm"
                            }
                        }
                    },
                    mid_body:{
                        name: "Mid Body",
                        body_parts: {
                            hip: {
                                value: 0,
                                name: "Hips"
                            },
                            waist: {
                                value: 0,
                                name: "Waist"
                            },
                            chest: {
                                value: 0,
                                name: "Chest"
                            }
                        }
                    },
                    right_leg: {
                        name: "Right Leg",
                        body_parts: {
                            inner_thigh: {
                                value: 0,
                                name: "Inner Thigh"
                            },
                            knee: {
                                value: 0,
                                name: "Knee"
                            },
                            calf: {
                                value: 0,
                                name: "Calf"
                            },
                            achilles: {
                                value: 0,
                                name: "Achilles"
                            }
                        }
                    },
                    left_leg: {
                        name: "Left Leg",
                        body_parts: {
                            inner_thigh: {
                                value: 0,
                                name: "Inner Thigh"
                            },
                            knee: {
                                value: 0,
                                name: "Knee"
                            },
                            calf: {
                                value: 0,
                                name: "Calf"
                            },
                            achilles: {
                                value: 0,
                                name: "Achilles"
                            }
                        }
                    }
                }
            }
        }
    }
})