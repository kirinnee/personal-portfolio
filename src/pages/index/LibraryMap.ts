import {LibraryData} from "../../classLibrary/LibraryData";

const libraryMap: LibraryData[] = [
	new LibraryData("blue", "KirinneeCore", "https://gitlab.com/node-packages-kirin/core", "This is a Node TypeScript library that provides typing and methods inspired by Ruby's Enumerable and C#'s LINQ. This library aims to provide a robust collection of manipulation methods that can be chained by extending Array and Map prototypes. It leverages an IDE to provide correct suggestions and explanations, allowing for quick development, which also reduces common patterns into extensible functions, significantly reducing file size."),
	new LibraryData("blue", "Tune", "https://gitlab.com/node-packages-kirin/tune", "A Node TypeScript sound library with easing and simpler sound management. It uses Howler.js as part of its core code."),
	new LibraryData("blue", "Animate", "https://gitlab.com/node-packages-kirin/animate", "A cross-browser animation interface that includes filter animations with typing that can be leveraged by using IDEs. It enables simple animation to be used in a Fluent API format, allowing for cleaner code and faster development time. It uses GSAP as part of its core code."),
	new LibraryData("blue", "rImage", "https://gitlab.com/node-packages-kirin/rimage", "A browser-based solution for responsive images. By providing a configuration file, which can be used together with ImageDeployer, it can automatically load a different sized image based on screen size and pixel density without the code being changed. It is written to improve the load time for image-heavy pages on smaller devices."),
	new LibraryData("blue", "ConsoleHelper", "https://gitlab.com/nuget-packages/console-helper", "Object-oriented framework and helper methods to build CLI using each command as an object within .NET Core. Commonly used to create NuGet CLI."),
	new LibraryData("blue", "MinImage", "https://gitlab.com/nuget-packages/minimage", ".NET Standard wrapper library over popular image compression methods. Used in servers to compress images before storing them. Provides a fluent API and can leverage IDE to give information and usage."),
	new LibraryData("blue", "BucketClient", "https://gitlab.com/nuget-packages/bucket-client", "Inspired by Rails’ Active Storage, it provides a uniform interface to Blob SaaS in the .NET Core ecosystem. Supports Azure Blob Storage, Amazon S3 Bucket, Digital Ocean Spaces and GCP Cloud Storage with Blob CRUD, Bucket CRUD, CORS and permission functionality."),
	new LibraryData("blue", "ImageDeployer", "https://gitlab.com/nuget-packages/image-deployer", "A DevOps tool that deploys SPA or websites’ static assets to cloud Blob storage services. Allows resizing based on rImage’s resizing configuration and optional image compression based on simple settings. Can be used to significantly reduce the payload of a static website as part of an automated deployment pipeline."),
	new LibraryData("blue", "KirinHttp", "https://gitlab.com/ruby-gem/kirin_http", "Simple HTTP client that leverages Ruby 2.6.0’s http::net library for simple GET, POST, PUT, PATCH, HEAD and DELETE commands for endpoints."),
	new LibraryData("blue", "BinaryTransformer", "https://gitlab.com/ruby-gem/binary-transformer", "A pipeline-based interface that allows multiple plugins to configure and transform binaries. Typical use cases are image resizing, compression or manipulation."),
	new LibraryData("blue", "bucket client", "https://gitlab.com/ruby-gem/bucket_client", "An alternative to the Rails’ ActiveStorage engine within both Bucket and Blob CRUD. On top of that, allows for access policies and CORS policy with support for Azure Blob Storage, Amazon S3 Bucket, Digital Ocean Spaces and GCP Cloud Storage."),
];


export {
	libraryMap
}
