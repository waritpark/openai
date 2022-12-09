exports.openaiGenerateImage = async (req, res) => {

    const { Configuration, OpenAIApi } = require('openai');

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    
    const { prompt, size } = req.body;
    const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const result = await openai.createImage({
            prompt,
            n:1,
            size:imageSize,
        });
        const imageUrl = result.data.data[0].url;
        // console.log(imageUrl);

        // test avec une image généré
        // const data = {"success":true,"data":"https://oaidalleapiprodscus.blob.core.windows.net/private/org-asLZNe5iaZnEULQhGW9nJhKv/user-AH8HGxaOrcuXJRv3PwiMvhOu/img-Kklhz3mAzvNzYRpI7HWDAecR.png?st=2022-12-08T23%3A12%3A30Z&se=2022-12-09T01%3A12%3A30Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-08T17%3A44%3A47Z&ske=2022-12-09T17%3A44%3A47Z&sks=b&skv=2021-08-06&sig=1pZbQIedpFqgZA7%2BqS7F6RLMzJwvqHkOSf/5%2BsTrcY4%3D"};
        // console.log(data);

        res.render('accueil.html.twig',{ imgs : imageUrl});
    }
    catch (error) {
        res.status(400).json({
            success:false,
            error:'Image non généré',
        });
        redirect('/error');
    }
    

}
