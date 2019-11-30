/**
 * @format
 */
import {jest} from 'jest';
import mockAsyncStorage from '../jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
