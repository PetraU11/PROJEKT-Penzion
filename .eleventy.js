module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");

  return {
    templateFormats: ["njk", "html", "md", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
