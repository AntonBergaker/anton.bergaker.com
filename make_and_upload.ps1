npm run clean
npm run build

echo "Uploading to AWS"
aws s3 sync ./dist s3://anton.bergaker.com --acl public-read

echo "Invalidating on CloudFront"
aws cloudfront create-invalidation --distribution-id E53P3813N0M89 --paths "/*"