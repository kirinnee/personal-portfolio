import {LibraryData} from "../../classLibrary/LibraryData";

const libraryMap: LibraryData[] = [
	new LibraryData("red", "KirinneeCore", "https://gitlab.com/node-packages-kirin/core",
		"This is a Node TypeScript library that provides typing and methods inspired by Ruby’s Enumerable and C#’s LINQ. This library aims to provide a robust collection of manipulation methods that can be chained by extending Array and Map prototypes. It leverages an IDE to provide correct suggestions and explanations, allowing for quick development, which also reduces common patterns into extensible functions, significantly reducing file size."),
	new LibraryData("#13ff00", "Tune", "https://gitlab.com/node-packages-kirin/tune",
		"This is a Node TypeScript sound library with easy and simple sound management. It uses Howler.js as a part of its core code."),
	new LibraryData("blue", "Animate", "https://gitlab.com/node-packages-kirin/animate",
		"This is a cross-browser animation interface that includes filter animations with typing that can be leveraged by using IDEs. It enables simple animation to be used in a fluent API format, allowing for cleaner code and faster development time. It uses GSAP as a part of its core code."),
	new LibraryData("#ff20dd", "rImage", "https://gitlab.com/node-packages-kirin/rimage",
		"This is a browser-based solution for responsive images. By providing a configuration file, which can be used together with ImageDeployer, it can automatically load a different-sized image based on screen size and pixel density without the code being changed. It is written to improve the load time for image-heavy pages on smaller devices."),
	new LibraryData("#ffe800", "ConsoleHelper", "https://gitlab.com/nuget-packages/console-helper",
		"This is an object-oriented framework and helper method to build CLI using each command as an object within .NET Core. It is commonly used to create NuGet CLI."),
	new LibraryData("#ff7300", "MinImage", "https://gitlab.com/nuget-packages/minimage",
		"This is a .NET Standard wrapper library around popular image compression methods. It is used in servers to compress images before storing them. It provides a fluent API and can leverage IDE to give information and usage."),
	new LibraryData("#ffc99d", "BucketClient", "https://gitlab.com/nuget-packages/bucket-client",
		"This is inspired by Rails’ Active Storage and provides a uniform interface to Blob SaaS in the .NET Core ecosystem. It supports Azure Blob Storage, Amazon S3 Bucket, Digital Ocean Spaces and GCP Cloud Storage with Blob CRUD, Bucket CRUD, CORS and permission functionality."),
	new LibraryData("#96fd53", "ImageDeployer", "https://gitlab.com/nuget-packages/image-deployer",
		"This is a DevOps tool that deploys SPA or websites’ static assets to cloud Blob storage services. It allows resizing based on rImage’s resizing configuration, and optional image compression based on simple settings. It can be used to significantly reduce the payload of a static website as a part of an automated deployment pipeline."),
	new LibraryData("#d8c4ff", "KirinHttp", "https://gitlab.com/ruby-gem/kirin_http",
		"This is a simple HTTP client that leverages Ruby 2.6.0’s http::net library for simple GET, POST, PUT, PATCH, HEAD and DELETE commands for endpoints."),
	new LibraryData("#ffc4f0", "BinaryTransformer", "https://gitlab.com/ruby-gem/binary-transformer",
		"This is a pipeline-based interface that allows multiple plugins to configure and transform binaries. Typical use cases are image resizing, compression and manipulation."),
	new LibraryData("#ca0000", "bucket client", "https://gitlab.com/ruby-gem/bucket_client",
		"This is an alternative to the Rails’ ActiveStorage engine within both Bucket and Blob CRUD. On top of that, it allows for access policies and CORS policy with support for Azure Blob Storage, Amazon S3 Bucket, Digital Ocean Spaces and GCP Cloud Storage."),
	new LibraryData("#ff20dd", "narwhal", "https://gitlab.com/kiringo/narwhal",
		"A Golang Library and CLI that allows saving and loading volumes as zip files."),

];


export {
	libraryMap
}
