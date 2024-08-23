import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import image from '../../assets/coach-london-lu2e1ji6.webp'
export default function Short() {
    return (
        <div>
            <Navbar />
            <div className="p-6 mx-auto bg-white rounded-md">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold mb-4">Life is Very Short</h1>
                </header>

                <header className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">What is Lorem Ipsum?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularized in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </header>

                <header className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Why Do We Use It?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking
                        at its layout. The point of using Lorem Ipsum is that it
                        has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it
                        look like readable English. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like).
                    </p>
                </header>

                <header className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Where Does It Come From?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making
                        it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in
                        Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum
                        passage, and going through the cites of the word
                        in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from
                        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                        et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory
                        of ethics, very popular during the Renaissance. The first
                        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes from a line in section 1.10.32.
                    </p>
                </header>

                <header>
                    <p className="text-gray-700 leading-relaxed">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation
                        by H. Rackham.
                    </p>
                </header>
                <img src={image} alt="alt"
                    className={'w-[200px] h-[150px] sm:w-[450px] sm:h-[300px]' +
                        ' my-[20px] lg:w-[600px] lg:h-[400px] md:mx-auto'}/>
            </div>
            <Footer/>
        </div>
    );
}
