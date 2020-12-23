module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    '@vue/app',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    // element官方教程
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
}
