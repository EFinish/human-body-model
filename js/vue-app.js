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
                                name: ""
                            },
                            bicep_tri_to_elbow: {
                                value: 0,
                                name: ""
                            },
                            elbow_to_forearm: {
                                value: 0,
                                name: ""
                            },
                            forearm_to_wrist: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    left_arm: {
                        name: "Left Arm",
                        body_parts: {
                            shoulder_to_bicep_tri: {
                                value: 0,
                                name: ""
                            },
                            bicep_tri_to_elbow: {
                                value: 0,
                                name: ""
                            },
                            elbow_to_forearm: {
                                value: 0,
                                name: ""
                            },
                            forearm_to_wrist: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    mid_body:{
                        name: "Mid Body",
                        body_parts: {
                            hip_to_waist: {
                                value: 0,
                                name: ""
                            },
                            waist_to_chest: {
                                value: 0,
                                name: ""
                            },
                            chest_to_collar: {
                                value: 0,
                                name: ""
                            },
                            collar_to_shoulder: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    right_leg: {
                        name: "Right Leg",
                        body_parts: {
                            hip_to_inner_thigh: {
                                value: 0,
                                name: ""
                            },
                            inner_thigh_to_knee: {
                                value: 0,
                                name: ""
                            },
                            knee_to_calf: {
                                value: 0,
                                name: ""
                            },
                            calf_to_achilles: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    left_leg: {
                        name: "Left Leg",
                        body_parts: {
                            hip_to_inner_thigh: {
                                value: 0,
                                name: ""
                            },
                            inner_thigh_to_knee: {
                                value: 0,
                                name: ""
                            },
                            knee_to_calf: {
                                value: 0,
                                name: ""
                            },
                            calf_to_achilles: {
                                value: 0,
                                name: ""
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
                                name: ""
                            },
                            elbow: {
                                value: 0,
                                name: ""
                            },
                            forearm: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    left_arm: {
                        name: "Left Arm",
                        body_parts: {
                            bicep_tri: {
                                value: 0,
                                name: ""
                            },
                            elbow: {
                                value: 0,
                                name: ""
                            },
                            forearm: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    mid_body:{
                        name: "Mid Body",
                        body_parts: {
                            hip: {
                                value: 0,
                                name: ""
                            },
                            waist: {
                                value: 0,
                                name: ""
                            },
                            chest: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    right_leg: {
                        name: "Right Leg",
                        body_parts: {
                            inner_thigh: {
                                value: 0,
                                name: ""
                            },
                            knee: {
                                value: 0,
                                name: ""
                            },
                            calf: {
                                value: 0,
                                name: ""
                            },
                            achilles: {
                                value: 0,
                                name: ""
                            }
                        }
                    },
                    left_leg: {
                        name: "Left Leg",
                        body_parts: {
                            inner_thigh: {
                                value: 0,
                                name: ""
                            },
                            knee: {
                                value: 0,
                                name: ""
                            },
                            calf: {
                                value: 0,
                                name: ""
                            },
                            achilles: {
                                value: 0,
                                name: ""
                            }
                        }
                    }
                }
            }
        }
    }
})