import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from './../../theme/index';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
  },
  modal: {
    flex: 1,
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
