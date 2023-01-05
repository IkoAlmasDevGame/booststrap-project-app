import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import indonesiaVphilipina from '../Assets/latest/sepakbola.jpeg';
import M4MLBB from '../Assets/latest/MLBB_M4.png';
import bencanaBanjir from '../Assets/latest/banjir-kaligarang.jpeg';
import toleransi from '../Assets/latest/toleransi.jpeg';

function LatestNews(){
    return (
        <div>
            <header
            style={{paddingTop : "auto", margin : "auto"}}
            >
            <h2 
            className='text-center items-center'
            id='terbaru'
            style={{fontSize:"18px", fontWeight:"500"}}> Berita Baru </h2>
            <Card>
                <CardImg src={indonesiaVphilipina}
                style={{width : "247px", height : "204px", margin : "auto", 
                marginTop : "5px", border : "solid 1px"}}
                />
                <Card.Header>
                    <Card.Title className='text-center fw-normal'>Indonesia Menang melawan Filiphina</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fw-normal'>
                    Timnas Indonesia berhasil mengalahkan Filipina pada laga pemungkas Grup A Piala AFF 2022, Senin (2/1/2023). 
                    Bertanding di Rizal Memorial Stadium, Manila, Marselino Ferdinan dkk. menang tipis 2-1.
                    Kemenangan ini membuat Timnas Indonesia lolos ke semifinal Piala AFF 2022 berstatus runner-up grup. 
                    Sebab pada laga lainnya, Thailand menang 3-1 atas Kamboja.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link 
                    href='https://www.bola.com/indonesia/read/5169821/hasil-piala-aff-2022-kalahkan-filipina-timnas-indonesia-tembus-semifinal-sebagai-runner-up-grup-a' 
                    className='btn btn-primary' 
                    color='white'>Baca Lebih Lanjut</Link>
                </Card.Footer>
            </Card>
            <Card>
                <CardImg src={M4MLBB}
                style={{width : "247px", height : "204px", margin : "auto", 
                marginTop : "5px", border : "solid 1px"}}
                />
                <Card.Header>
                    <Card.Title className='text-center fw-normal'>Jadwal M4 World Championship, Format, Hasil Pertandingan dan cara menonton</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fw-normal'>
                    Jadwal M4 World Championship akhirnya resmi dirilis oleh Moonton, Kamis (8/12) seiring semua tim peserta sudah diketahui dari berbagai hasil kualifikasi.
                    M4 World Championship nantinya akan digelar di Jakarta, Indonesia pada bulan Januari 2023. 
                    Sebagai sebuah negara dengan komunitas dan penggemar Mobile Legends: Bang Bang (MLBB) terbesar di dunia, akhirnya Indonesia terpilih menjadi tuan rumah.
                    Sebagai event kejuaraan dunia MLBB, M4 World Championship akan diikuti oleh 16 tim esports terbaik dari seluruh regional. Nantinya, mereka akan bertanding dalam beberapa fase yang akan dijelaskan selanjutnya.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link 
                    href='https://www.oneesports.id/mobile-legends/jadwal-hasil-m4-world-championship/' 
                    className='btn btn-primary' 
                    color='white'>Baca Lebih Lanjut</Link>
                </Card.Footer>
            </Card>
            <Card>
                <CardImg src={bencanaBanjir}
                style={{width : "247px", height : "204px", margin : "auto", 
                marginTop : "5px", border : "solid 1px"}}
                />
                <Card.Header>
                    <Card.Title className='text-center fw-normal'>Kaligarang Ungaran Dilanda Banjir Sore Tadi, Ketinggian Hingga 1 Meter</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fw-normal'>
                    Kawasan Kaligarang, Ungaran Barat, Semarang, dilanda banjir sore tadi. 
                    Air menggenangi rumah warga hingga ketinggian 1 meter.
                    Beruntung, banjir tersebut bisa surut dalam waktu cepat. 
                    Malam ini warga sibuk membersihkan lumpur yang cukup tebal di permukiman.
                    Kepala Pelaksana BPBD Kabupaten Semarang Juwair Suntara mengatakan, banjir yang terjadi di Jalan Kaligarang karena luapan Sungai Kaligarang.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link 
                    href='https://www.detik.com/jateng/berita/d-6498953/kaligarang-ungaran-dilanda-banjir-sore-tadi-ketinggian-hingga-1-meter' 
                    className='btn btn-primary' 
                    color='white'>Baca Lebih Lanjut</Link>
                </Card.Footer>
            </Card>
            <Card>
                <CardImg src={toleransi}
                style={{width : "247px", height : "204px", margin : "auto", 
                marginTop : "5px", border : "solid 1px"}}
                />
                <Card.Header>
                    <Card.Title className='text-center fw-normal'>Potret Toleransi di Tengah Banjir Kudus, Aula Gereja jadi Tempat Salat</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fw-normal'>
                    Ratusan jiwa di Kabupaten Kudus, Jawa Tengah mengungsi akibat banjir. 
                    Setelah menggenang permukiman selama lima hari, banjir belum juga surut.
                    Salah satu daerah yang paling parah adalah di Desa Tanjung Karang, Kecamatan Jati. 
                    Di desa itu terdapat sekitar seratusan warga yang terpaksa mengungsi.
                    Mereka mengungsi di aula Gereja Kristen Muria Indonesia (GKMI) Tanjung Karang, salah satu bangunan yang tidak tergenang banjir.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link
                    href='https://www.detik.com/jateng/berita/d-6498894/potret-toleransi-di-tengah-banjir-kudus-aula-gereja-jadi-tempat-salat' 
                    className='btn btn-primary' 
                    color='white'>Baca Lebih Lanjut</Link>
                </Card.Footer>
            </Card>
            </header>
        </div>
    );
}

export default LatestNews