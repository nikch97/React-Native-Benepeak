// @flow
import React from 'react';
import { TextField, Picker, Button } from 'react-native-ui-lib';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import tailwind from 'tailwind-rn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';
// import {calendar} from '../../../assets/images/pages/index'

// const { TextField } = Incubator;
export const iconRight = <FontAwesome size={25} color={colors.white} name="angle-right" />
export const iconLeft = <FontAwesome size={25} color={colors.black} name="angle-left" />

export default props => (
  <View style={[{ flex: 1, backgroundColor: colors.white }]}>
    <ScrollView>
      <View style={[{ backgroundColor: colors.mainBack }, tailwind('pl-10 pb-5')]}>
        <Text style={tailwind('font-semibold mb-2')}>1 of 5</Text>
        <Text style={tailwind('text-xl')}>Personal Info</Text>
      </View>
      <View style={[tailwind('pl-10 pr-10 pt-5 justify-between')]}>
        <View style={tailwind('flex-row justify-between mb-3')}>
          <View style={{ width: 170 }}>
            <Text style={{ color: colors.lightGray }}>FIRST NAME</Text>
            <TextField
              placeholder="Given name"
              containerStyle={[
                tailwind(
                  ' border-2 border-gray-200 border-solid rounded-xl p-2 mt-2',
                ),
                { height: 40 },
              ]}
              hideUnderline
            />
          </View>
          <View style={{ width: 170 }}>
            <Text style={{ color: colors.lightGray }}>MIDDLE NAME</Text>
            <TextField
              placeholder="Optional"
              containerStyle={[
                tailwind(
                  ' border-2 border-gray-200 border-solid rounded-xl p-2 mt-2',
                ),
                { height: 40 },
              ]}
              hideUnderline
            />
          </View>
        </View>
        <View style={tailwind('mb-3')}>
          <Text style={{ color: colors.lightGray }}>LAST NAME</Text>
          <TextField
            placeholder="Family name"
            containerStyle={[
              tailwind(' border-2 border-gray-200 border-solid rounded-xl p-2 mt-2'),
              { height: 40 },
            ]}
            hideUnderline
          />
        </View>
        <View style={tailwind('mb-3')}>
          <Text style={{ color: colors.lightGray }}>BIRTH DATE</Text>
          <TextField
            placeholder="mmm-dd-yyyy"
            containerStyle={[
              tailwind(' border-2 border-gray-200 border-solid rounded-xl p-2 mt-2'),
              { height: 40 },
            ]}
            hideUnderline
            // rightIconStyle={{width:134, height:134, marginTop: 10}}
            // rightIconSource={calendar}
          />
        </View>
        <View style={tailwind('mb-3')}>
          <Text style={{ color: colors.lightGray }}>GENDER</Text>         
          <Picker
            containerStyle={[
              tailwind(' border-2 border-gray-200 border-solid rounded-xl p-2 mb-3 mt-2'),
              { height: 40 },
            ]}
            // rightIconSource={()=> {return icon}}
            hideUnderline
          />
        </View>
        <View style={tailwind('mb-3')}>
          <Text style={{ color: colors.lightGray }}>PHONE NUMBER</Text>
          <TextField
            placeholder="e.g. (236) 996-6787"
            containerStyle={[
              tailwind(' border-2 border-gray-200 border-solid rounded-xl p-2 mt-2'),
              { height: 40 },
            ]}
            hideUnderline
            keyboardType="number-pad"
          />
        </View>
        <View style={tailwind('flex-row justify-between mt-10')}>
          <Button
            backgroundColor={colors.mainBack}
            iconSource={() => iconLeft}
            style={[tailwind('rounded-xl h-16'), { width: '20%' }]}
          />
          <Button
            backgroundColor={colors.next}
            label="Next"
            iconSource={() => iconRight}
            iconOnRight
            labelStyle={tailwind('text-xl mr-4 mb-1')}
            style={[tailwind('rounded-xl h-16'), { width: '70%' }]}
            iconStyle={tailwind('mt-5')}
          />
        </View>
      </View>
    </ScrollView>
  </View>
);
// font-semibold
