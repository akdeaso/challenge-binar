import { View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { moderateScale } from 'react-native-size-matters';

const SkeleLoad = ({ screen }) => {
    if (screen === "Home") {
        return (
            <SkeletonPlaceholder highlightColor='gray' backgroundColor='rgb(57,57,78)'>
                <View>
                    <View
                        style={{
                            width: moderateScale(130),
                            height: moderateScale(20),
                            borderRadius: moderateScale(5),
                            marginVertical: moderateScale(16),
                            marginLeft: moderateScale(13)
                        }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View
                                style={{
                                    width: moderateScale(120),
                                    height: moderateScale(180),
                                    borderRadius: 10,
                                    marginHorizontal: moderateScale(13),
                                }}
                            />
                        </View>
                        <View>
                            <View
                                style={{
                                    width: moderateScale(120),
                                    height: moderateScale(180),
                                    borderRadius: 10,
                                    marginHorizontal: moderateScale(13),
                                }}
                            />
                        </View>
                        <View>
                            <View
                                style={{
                                    width: moderateScale(120),
                                    height: moderateScale(180),
                                    borderRadius: 10,
                                    marginHorizontal: moderateScale(13),
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: moderateScale(130),
                            height: moderateScale(20),
                            borderRadius: moderateScale(5),
                            marginVertical: moderateScale(16),
                            marginLeft: moderateScale(13)
                        }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(100),
                                borderRadius: 10,
                                marginRight: moderateScale(16),
                                marginLeft: moderateScale(13),
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                height: moderateScale(100),
                                justifyContent: 'space-between',
                                marginBottom: moderateScale(10),
                            }}>
                            <View
                                style={{ width: moderateScale(180), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(80), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(30), borderRadius: moderateScale(10) }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(100),
                                borderRadius: 10,
                                marginRight: moderateScale(16),
                                marginLeft: moderateScale(13),
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                height: moderateScale(100),
                                justifyContent: 'space-between',
                                marginBottom: moderateScale(10),
                            }}>
                            <View
                                style={{ width: moderateScale(180), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(80), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(30), borderRadius: moderateScale(10) }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(100),
                                borderRadius: 10,
                                marginRight: moderateScale(16),
                                marginLeft: moderateScale(13),
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                height: moderateScale(100),
                                justifyContent: 'space-between',
                                marginBottom: moderateScale(10),
                            }}>
                            <View
                                style={{ width: moderateScale(180), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(80), height: moderateScale(20), borderRadius: moderateScale(5) }}
                            />
                            <View
                                style={{ width: moderateScale(100), height: moderateScale(30), borderRadius: moderateScale(10) }}
                            />
                        </View>
                    </View>
                </View>
            </SkeletonPlaceholder>
        );
    } else {
        return (
            <SkeletonPlaceholder highlightColor='gray' backgroundColor='rgb(57,57,78)'>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View
                            style={{
                                width: moderateScale(30),
                                height: moderateScale(30),
                                borderRadius: moderateScale(20),
                                marginVertical: moderateScale(16),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={{
                                    width: moderateScale(30),
                                    height: moderateScale(30),
                                    borderRadius: moderateScale(20),
                                    marginVertical: moderateScale(16),
                                    marginLeft: moderateScale(13)
                                }}
                            />
                            <View
                                style={{
                                    width: moderateScale(30),
                                    height: moderateScale(30),
                                    borderRadius: moderateScale(20),
                                    marginVertical: moderateScale(16),
                                    marginHorizontal: moderateScale(13)
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View
                            style={{
                                marginTop: moderateScale(50),
                                height: moderateScale(190),
                                borderRadius: moderateScale(10),
                                marginHorizontal: moderateScale(13),
                                marginBottom: moderateScale(10)
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: moderateScale(90),
                            height: moderateScale(20),
                            borderRadius: moderateScale(5),
                            marginTop: moderateScale(16),
                            marginBottom: moderateScale(10),
                            marginLeft: moderateScale(13)
                        }}
                    />
                    <View style={{ flexDirection: 'row', marginBottom: moderateScale(15) }}>
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(32),
                                borderRadius: moderateScale(10),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(32),
                                borderRadius: moderateScale(10),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(32),
                                borderRadius: moderateScale(10),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                width: moderateScale(100),
                                height: moderateScale(32),
                                borderRadius: moderateScale(10),
                                marginLeft: moderateScale(13)
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: moderateScale(90),
                            height: moderateScale(20),
                            borderRadius: moderateScale(5),
                            marginTop: moderateScale(16),
                            marginBottom: moderateScale(10),
                            marginLeft: moderateScale(13)
                        }}
                    />
                    <View style={{ marginBottom: moderateScale(15) }}>
                        <View
                            style={{
                                height: moderateScale(20),
                                borderRadius: moderateScale(5),
                                marginHorizontal: moderateScale(13),
                                marginBottom: moderateScale(3) //sini coek
                            }}
                        />
                        <View
                            style={{
                                height: moderateScale(20),
                                borderRadius: moderateScale(5),
                                marginHorizontal: moderateScale(13),
                                marginBottom: moderateScale(3) //sini coek
                            }}
                        />
                        <View
                            style={{
                                height: moderateScale(20),
                                borderRadius: moderateScale(5),
                                marginHorizontal: moderateScale(13), //sini coek
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: moderateScale(90),
                            height: moderateScale(20),
                            borderRadius: moderateScale(5),
                            marginTop: moderateScale(16),
                            marginBottom: moderateScale(10),
                            marginLeft: moderateScale(13)
                        }}
                    />
                    <View style={{ flexDirection: 'row', marginBottom: moderateScale(30) }}>
                        <View
                            style={{
                                height: moderateScale(160),
                                width: moderateScale(116),
                                borderRadius: moderateScale(5),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                height: moderateScale(160),
                                width: moderateScale(116),
                                borderRadius: moderateScale(5),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                height: moderateScale(160),
                                width: moderateScale(116),
                                borderRadius: moderateScale(5),
                                marginLeft: moderateScale(13)
                            }}
                        />
                        <View
                            style={{
                                height: moderateScale(160),
                                width: moderateScale(116),
                                borderRadius: moderateScale(5),
                                marginLeft: moderateScale(13)
                            }}
                        />
                    </View>
                </View>
            </SkeletonPlaceholder>
        );
    }
};

export default SkeleLoad;