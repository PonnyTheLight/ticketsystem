export async function POST({request}) {

    const body = await request.json()
    const bannerFile = body.BannerFile

    if (bannerFile) {
        console.log(bannerFile)
        let fr = new FileReader();
        fr.readAsDataURL(bannerFile)

        /* fs.appendFile(`public/media/blog/${bannerFile}`, bannerFile, function (err) {
            if (err) throw err;
            console.log('Saved!');
        }) */
    }
}