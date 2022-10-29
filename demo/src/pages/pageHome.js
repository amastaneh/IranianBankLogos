import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon'
import packageDemo from './../../package.json'
import "iranianbanklogos/dist/ibl.css";


const PageHome = () => {
    const [hint, setHint] = React.useState();
    const bankList = ["bsi", "mellat", "tejarat", "bmi", "sepah", "bki", "parsian", "maskan", "rb", "en", "ansar", "bpi", "sb", "sina", "post", "ghbi", "tt", "shahr", "ba", "sarmayeh", "day", "hi", "iz", "kar", "tourism", "bim", "edbi", "me", "ivbb", "resalat", "miran", "melal", "rb2"]
    const fa2enDigits = s => s.replace(/[0-9]/g, w => String.fromCharCode(w.charCodeAt(0) + 1728))

    return <React.Fragment>

        <header className="row text-center mt-5">
            <h1 className="fw-bolder">لوگوی بانک های ایران</h1>
            <h1 className="fw-bolder">Iranian Bank Logos</h1>
            <section className="my-4">
                <div>فهرست لوگوهای بانک های ایران</div>
                <div>مناسب سازی شده برای سامانه های مبتنی بر وب و موبایل</div>
                <div>با کلیک بر روی هر لوگو کد HTML آن در حافظه کپی می شود</div>
            </section>
        </header>

        <main className="row text-center">
            <div className="col-12">
                <button className="btn btn-dark mx-1" href="https://www.github.com/webdesigniran/IranianBankLogos">کدها در GitHub</button>
                <button className="btn btn-primary mx-1" href="https://www.nuget.org/packages/IranianBankLogos/">دانلود از NuGet</button>
            </div>

            {[32, 64, 128, 256].map(size =>
                <React.Fragment key={size} >
                    <div className="col-12 mt-5">
                        <h2 className="fw-bolder">سایز {fa2enDigits(size.toString())} پیکسلی</h2>
                        {bankList.map((bank, bankIndex) =>
                            <React.Fragment key={bankIndex}>
                                <span
                                    className={`ibl${size} ibl-${bank} cursor-pointer mx-1`}
                                    onClick={() => {
                                        setHint({ size, bank })
                                        navigator.clipboard.writeText(`<i class="ibl${size} ibl-${bank}"></i>`)
                                    }}
                                />
                                {(((bankIndex + 1) % 9 === 0) && size < 256) && <br />}
                            </React.Fragment>
                        )}
                    </div>

                    {(hint && hint.size === size) &&
                        <React.Fragment>
                            <div className="col-4" />
                            <div className="col-4 mt-2">
                                <div className="card bg-secondary p-3">
                                    <code className="text-white">
                                        &lt;i class="<span className="text-warning">ibl{hint.size} ibl-{hint.bank}</span>"&gt;&lt;/i&gt;
                                    </code>
                                </div>
                            </div>
                            <div className="col-4" />
                        </React.Fragment>
                    }

                </React.Fragment>
            )}
        </main>

        <footer className="row text-center mt-5 mb-2 text-muted fs-8">
            <hr />
            <div className="text-nowrap">
                تلاشی با ❤ در <a className="text-decoration-none text-secondary" href="http://webdesigniran.com">طراحی وب ایران</a>
            </div>
            <div className="text-nowrap">
                {packageDemo.name} {packageDemo.version}
            </div>
        </footer>

        <GitHubForkRibbon position="right"
            color="black"
            href="//github.com/amastaneh/IranianBankLogos"
            target="_blank">Fork me on GitHub</GitHubForkRibbon>
    </React.Fragment>
}

export default PageHome