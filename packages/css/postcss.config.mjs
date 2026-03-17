import postcssGlobalData from '@csstools/postcss-global-data';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssImport from 'postcss-import';
import postcssCustomMedia from 'postcss-custom-media';
import cssnano from 'cssnano';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    postcssGlobalData({
      files: [
        './src/global/variables.css'
      ]
    }),
    postcssImportExtGlob(),
    postcssImport(),
    postcssCustomMedia(),
    isProduction && cssnano()
  ].filter(Boolean)
};
