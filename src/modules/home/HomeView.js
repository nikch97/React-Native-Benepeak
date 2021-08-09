// @flow
import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Card, ProgressBar } from 'react-native-ui-lib';
import tailwind from 'tailwind-rn';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../styles';


const {width}= Dimensions.get('window');
console.log(width)
export default props => (  
  <View style={{ backgroundColor: colors.mainBack }}>
    <ScrollView>
      <View style={tailwind('flex-row justify-between pl-4 pt-3')}>
        <Text style={tailwind('text-lg')}>Good morning, Alex</Text>
      </View>
      <View style={tailwind('p-4 max-w-full')}>
        <View style={tailwind('flex-row justify-between')}>
          <Card
            style={[
              tailwind('p-4 justify-between  mr-3'),
              { width: width/2.2, height: 177 },
            ]}
          >
            <Text style={{ color: colors.lighBlue }}>Health</Text>
            <View>
              <Text style={{ color: colors.lightGray }}>BALANCE</Text>
              <Text style={tailwind('text-lg')}>$ 1,100</Text>
            </View>
            <View>
              <View style={tailwind('flex-row justify-between')}>
                <Text
                  style={[tailwind('text-xs'), { color: colors.lightGray }]}
                >
                  1,900
                </Text>
                <Text
                  style={[tailwind('text-xs'), { color: colors.lightGray }]}
                >
                  3000
                </Text>
              </View>
              <ProgressBar
                backgroundColor={colors.lighBlue}
                progressBackgroundColor={colors.sky}
                progress={70}
                height={5}
              />
            </View>
          </Card>
          <Card
            style={[
              tailwind('p-4 justify-between ml-3 mr-3'),
              { width: width/2.4, height: 177 },
            ]}
          >
            <Text style={{ color: colors.lightRed }}>Wellness</Text>
            <View>
              <Text style={{ color: colors.lightGray }}>BALANCE</Text>
              <Text style={tailwind('text-lg')}>$ 1,400</Text>
            </View>
            <View>
              <View style={tailwind('flex-row justify-between')}>
                <Text
                  style={[tailwind('text-xs'), { color: colors.lightGray }]}
                >
                  600
                </Text>
                <Text
                  style={[tailwind('text-xs'), { color: colors.lightGray }]}
                >
                  2,000
                </Text>
              </View>
              <ProgressBar
                backgroundColor={colors.lightRed}
                progressBackgroundColor={colors.pink}
                progress={40}
                height={5}
              />
            </View>
          </Card>
        </View>
      </View>
      <View style={tailwind('flex-row justify-between pl-4 pr-4')}>
        <Text style={tailwind('text-lg')}>Last Clames</Text>
        <FontAwesome size={20} name="arrow-right" />
      </View>
      <View style={tailwind('p-4')}>
        <View style={tailwind('flex-row justify-between')}>
          <Card
            style={[
              tailwind('p-4 justify-between  mr-4'),
              { width: 295, height: 204 },
            ]}
          >
            <View style={tailwind('flex-row justify-between items-center')}>
              <View style={tailwind('flex-row items-center')}>
                <FontAwesome name="tooth" size={18} color={colors.lighBlue} />
                <Text style={tailwind('font-medium text-lg pl-2')}>Dental</Text>
              </View>
              <Text style={{ color: colors.lightGray }}>HEALTH</Text>
            </View>
            <View
              style={[
                tailwind(
                  'p-5 flex-row justify-between border-2 border-gray-200 border-solid rounded-xl	',
                ),
              ]}
            >
              <View>
                <Text style={tailwind('text-lg')}>$ 250</Text>
                <Text style={{ color: colors.lightGray }}>AMOUNT</Text>
              </View>
              <View>
                <View style={tailwind('flex-row items-center')}>
                  <FontAwesome
                    style={tailwind('p-2')}
                    name="circle"
                    color={colors.pending}
                  />
                  <Text style={tailwind('text-lg')}>Pending</Text>
                </View>
                <Text
                  style={[tailwind('self-end'), { color: colors.lightGray }]}
                >
                  STATUS
                </Text>
              </View>
            </View>
            <View style={tailwind('flex-row justify-between items-center')}>
              <View style={tailwind('flex-row justify-between items-center')}>
                <FontAwesome
                  size={15}
                  name="user-alt"
                  color={colors.lightGray}
                />
                <Text style={tailwind('text-lg pl-2')}>David Morgan</Text>
              </View>
              <Text style={{ color: colors.lightGray }}>JUNE 24</Text>
            </View>
          </Card>
          <Card
            style={[
              tailwind('p-4 justify-between  mr-4'),
              { width: 295, height: 204 },
            ]}
          >
            <View style={tailwind('flex-row justify-between items-center')}>
              <View style={tailwind('flex-row items-center')}>
                <FontAwesome name="tooth" size={18} color={colors.lighBlue} />
                <Text style={tailwind('font-medium text-lg pl-2')}>Dental</Text>
              </View>
              <Text style={{ color: colors.lightGray }}>HEALTH</Text>
            </View>
            <View
              style={[
                tailwind(
                  'p-5 flex-row justify-between border-2 border-gray-200 border-solid rounded-xl	',
                ),
              ]}
            >
              <View>
                <Text style={tailwind('text-lg')}>$ 250</Text>
                <Text style={{ color: colors.lightGray }}>AMOUNT</Text>
              </View>
              <View>
                <View style={tailwind('flex-row items-center')}>
                  <FontAwesome
                    style={tailwind('p-2')}
                    name="circle"
                    color={colors.pending}
                  />
                  <Text style={tailwind('text-lg')}>Pending</Text>
                </View>
                <Text
                  style={[tailwind('self-end'), { color: colors.lightGray }]}
                >
                  STATUS
                </Text>
              </View>
            </View>
            <View style={tailwind('flex-row justify-between items-center')}>
              <View style={tailwind('flex-row justify-between items-center')}>
                <FontAwesome
                  size={15}
                  name="user-alt"
                  color={colors.lightGray}
                />
                <Text style={tailwind('text-lg pl-2')}>David Morgan</Text>
              </View>
              <Text style={{ color: colors.lightGray }}>JUNE 24</Text>
            </View>
          </Card>
        </View>
      </View>
      <View style={tailwind('flex-row justify-between pl-4 pr-4')}>
        <Text style={tailwind('text-lg')}>Marketplace</Text>
        <FontAwesome size={20} name="arrow-right" />
      </View>
      <View style={tailwind('p-4')}>
        <View style={tailwind('flex-row justify-between')}>
          <Card
            style={[
              tailwind('flex-row justify-center items-center'),
              { width: 152, height: 108 },
            ]}
          >
            <Text style={tailwind('text-lg')}>SnapClarity</Text>
          </Card>
          <Card
            style={[
              tailwind('flex-row justify-center items-center'),
              { width: 152, height: 108 },
            ]}
          >
            <Text style={tailwind('text-lg')}>Mindset</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  </View>
);
