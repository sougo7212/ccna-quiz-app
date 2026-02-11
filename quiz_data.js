const QUIZ_DATA = {
  "questions": [
    {
      "id": 1,
      "category": "ネットワーキングの機能について",
      "question": "スモールオフィス/ホームオフィスのネットワーク環境の特徴を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "アップリンクに10G ポートが必要である",
        "コア層、ディストリビューション層、アクセス層のアーキテクチャが必要である",
        "50～100ユーザをサポートする",
        "ブロードバンド接続用ルータを使用する",
        "1～50ユーザをサポートする"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0003.png",
      "explanation": "スモールオフィス/ホームオフィスは、一般的に1～50ユーザの小規模環境であり、ブロードバンド接続用ルータを使用します。"
    },
    {
      "id": 2,
      "category": "TCP/IP リンク レイヤについて",
      "question": "UTP Cat5eケーブルとCat6aケーブルの類似点について、適切な説明を次の選択肢の中から2つ選びなさい。",
      "choices": [
        "どちらも1ギガビット以上の速度をサポートする",
        "どちらも最大10ギガビットの速度をサポートする",
        "どちらも500MHzの周波数で動作する",
        "どちらも最大55メートルの距離をサポートする",
        "どちらも最大100メートルの距離をサポートする"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0003.png",
      "explanation": "Cat5eとCat6aケーブルは、どちらも1ギガビット以上の速度をサポートし、最大100メートルの距離をサポートします。"
    },
    {
      "id": 3,
      "category": "TCP/IP リンク レイヤについて",
      "question": "光ファイバーケーブルと銅ケーブルの違いとして適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "データはクラッドを通過する",
        "ファイバーはRJ-45接続を使用して物理インターフェイスに接続する",
        "BNCコネクターはファイバー接続に使用される",
        "ガラスコアコンポーネントはクラッドに入っている",
        "光はファイバーのコアを通過する"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0007.jpg",
      "answer_image": "page_0004.png",
      "explanation": "光ファイバーケーブルでは、ガラスコアコンポーネントがクラッドに入っており、光はファイバーのコアを通過します。"
    },
    {
      "id": 4,
      "category": "TCP/IP リンク レイヤについて",
      "question": "Ethernetフレームフォーマットのフィールドを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "送信元IPアドレス",
        "FCS(frame check sequence)",
        "宛先IPアドレス",
        "ヘッダ",
        "タイプ"
      ],
      "correct_answers": [1, 4],
      "answer_count": 2,
      "question_image": "0008.jpg",
      "answer_image": "page_0004.png",
      "explanation": "Ethernetフレームフォーマットには、FCS(frame check sequence)とタイプフィールドが含まれます。"
    },
    {
      "id": 5,
      "category": "TCP/IP リンク レイヤについて",
      "question": "図のような構成において、PC4からPC1へフレームを送信した際にスイッチが取るアクションとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "送信元MACアドレスとポートをMACアドレステーブルに挿入し、フレームをPC1に転送する",
        "MACアドレステーブルでルックアップを実行するが、エントリがないためにフレームを破棄する",
        "レイヤー2MACアドレスをレイヤー3 IPアドレスにマッピングし、フレームを転送する",
        "PC1が接続されているポートを除く、全てのポートからフレームをフラッディングする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0008.jpg",
      "answer_image": "page_0005.png",
      "has_diagram": true,
      "explanation": "スイッチは送信元MACアドレスとポートをMACアドレステーブルに挿入し、既知の宛先であるPC1にフレームを転送します。"
    },
    {
      "id": 6,
      "category": "TCP/IP リンク レイヤについて",
      "question": "スイッチが、フレームを受信したインターフェイス以外のすべてのインターフェイスからそのフレームを転送する動作を何と呼びますか。正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "フラッディング",
        "マルチキャスト",
        "ARP",
        "CDP"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0009.jpg",
      "answer_image": "page_0006.png",
      "explanation": "この動作はフラッディングと呼ばれます。"
    },
    {
      "id": 7,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "10.3.160.0/20 サブネットに所属するホストアドレスを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "10.3.176.1",
        "10.3.160.255",
        "10.3.168.0",
        "10.3.174.255",
        "10.3.160.0",
        "10.3.175.255"
      ],
      "correct_answers": [1, 3, 5],
      "answer_count": 3,
      "question_image": "0009.jpg",
      "answer_image": "page_0006.png",
      "explanation": "10.3.160.0/20のサブネットに含まれるホストアドレスは、10.3.160.255、10.3.174.255、10.3.175.255です。"
    },
    {
      "id": 8,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "異なるサブネットの複数のホストに対して、同じデータを1回で送信するために使用する宛先IPアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "239.254.0.1",
        "172.30.2.1",
        "192.168.1.200",
        "127.0.0.1"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0009.jpg",
      "answer_image": "page_0007.png",
      "explanation": "マルチキャストアドレス239.254.0.1を使用して、複数のホストに同時にデータを送信できます。"
    },
    {
      "id": 9,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "IPアドレス 172.18.159.170/22 が含まれるサブネットのネットワークアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "172.18.0.0",
        "172.18.152.0",
        "172.18.128.0",
        "172.18.144.0",
        "172.18.156.0",
        "172.18.158.0",
        "172.18.159.0"
      ],
      "correct_answers": [4],
      "answer_count": 1,
      "question_image": "0010.jpg",
      "answer_image": "page_0008.png",
      "explanation": "/22サブネットマスクを適用すると、172.18.156.0がネットワークアドレスになります。"
    },
    {
      "id": 10,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "IPアドレス 10.15.25.35/23 が含まれるサブネットに関する説明として正しいものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "このサブネットのダイレクトブロードキャストアドレスは10.15.25.255である",
        "このサブネットのサブネットマスクは 255.255.255.250である",
        "このサブネットの最大の有効なホストアドレスは 10.15.25.255である",
        "このサブネットの最小の有効なホストアドレスは 10.15.25.1である",
        "このサブネットのサブネットアドレスは 10.15.24.0である"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0010.jpg",
      "answer_image": "page_0009.png",
      "explanation": "/23サブネットでは、サブネットアドレスは10.15.24.0で、最小の有効なホストアドレスは10.15.25.1です。"
    },
    {
      "id": 11,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "エンジニアであるあなたは、図のようなネットワーク構成において、20台のホストを接続予定の新しいオフィスのためにサブネットを追加することになりました。アドレスの無駄を最小限に抑えることができるサブネットのネットワークアドレスとマスクの組合せはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "20.1.105.48  255.255.255.224",
        "20.1.105.32  255.255.255.240",
        "20.1.105.32  255.255.255.224",
        "20.1.105.48  255.255.255.240"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0011.jpg",
      "answer_image": "page_0010.png",
      "has_diagram": true,
      "explanation": "20台のホストには最低32個のアドレスが必要なので、/27(255.255.255.224)を使用します。"
    },
    {
      "id": 12,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "以下のネットワークでホストに利用できるアドレスを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "10.0.1.246",
        "10.0.1.245",
        "10.0.1.247",
        "10.0.1.252"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0011.jpg",
      "answer_image": "page_0011.png",
      "has_diagram": true,
      "explanation": "10.0.1.244/30サブネットでは、10.0.1.245と10.0.1.246がホストアドレスとして利用可能です。"
    },
    {
      "id": 13,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "各IPアドレスの範囲として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A①  B⑤  C③  D④  E②",
        "A⑤  B②  C③  D④  E①",
        "A④  B①  C③  D⑤  E②",
        "A⑤  B②  C①  D③  E④"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0012.jpg",
      "answer_image": "page_0012.png",
      "has_diagram": true,
      "explanation": "各IPアドレスと範囲を正しくマッピングする必要があります。"
    },
    {
      "id": 14,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "ある企業のオフィスは、4つのフロアにまたがってネットワークを構成しています。1階:24台のホストを接続、2階:29台のホストを接続、3階:28台のホストを接続、4階:22台のホストを接続。効率の よいアドレスの割当てで集約を行うためには、各フロアのネットワークにどのようなアドレスを割当てるのがよいですか、集約アドレスと、各フロアのネットワークに割当てるアドレス構成として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "集約アドレスが192.168.0.0/26、各フロアに割り当てるアドレスが192.168.0.0/29",
        "集約アドレスが192.168.0.0/25、各フロアに割り当てるアドレスが192.168.0.0/27",
        "集約アドレスが192.168.0.0/24、各フロアに割り当てるアドレスが192.168.0.0/28",
        "集約アドレスが192.168.0.0/23、各フロアに割り当てるアドレスが192.168.0.0/25"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0012.jpg",
      "answer_image": "page_0013.png",
      "explanation": "最大29台のホストに対応するには/27が必要です。4つのサブネットを集約するには/25が適切です。"
    },
    {
      "id": 15,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "RFC1918で規定されているアドレス空間が満たす役割について正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "IPアドレスの重複を避ける",
        "パブリックIPv6アドレス空間を定義する",
        "パブリックIPv4アドレスを節約する",
        "NATプロトコルをサポートする"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0013.jpg",
      "answer_image": "page_0014.png",
      "explanation": "RFC1918プライベートアドレスは、パブリックIPv4アドレスを節約するために使用されます。"
    },
    {
      "id": 16,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "プライベートIPv4アドレスの特徴として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "プライベートIPアドレスを使用してインターネットに到達するためには、NATが不要であることを保証する",
        "すべてのホストがインターネットで安全に通信することを可能にする",
        "外部から企業ネットワークのホストに直接続できるようにする",
        "複数の企業が同じアドレスを競合することなしに使用することができる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0013.jpg",
      "answer_image": "page_0015.png",
      "explanation": "プライベートIPアドレスは、複数の企業が同じアドレス空間を独立して使用できます。"
    },
    {
      "id": 17,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "クライアントPCのネットワーク構成パラメータを確認しています。以下の出力結果から判断して適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A→2, B→3, C→4, D→1, E→5",
        "A→2, B→1, C→4, D→3, E→5",
        "A→3, B→1, C→4, D→2, E→5",
        "A→4, B→2, C→5, D→1, E→3"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0014.jpg",
      "answer_image": "page_0016.png",
      "has_diagram": true,
      "explanation": "Windows ipconfigの出力結果から各項目を正しく識別します。"
    },
    {
      "id": 18,
      "category": "TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要",
      "question": "以下の出力結果から判断して適切な組合せを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A⑤  B①  C②  D③  E④",
        "A①  B⑤  C②  D③  E④",
        "A②  B⑤  C①  D③  E④",
        "A①  B⑤  C②  D④  E③"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0015.jpg",
      "answer_image": "page_0017.png",
      "has_diagram": true,
      "explanation": "Linuxのip addrコマンドの出力から各項目を正しく識別します。"
    },
    {
      "id": 19,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPがUDPと異なっている点の説明として正しいものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "TCPは通信の同期を実現する",
        "TCPセグメントはデータグラムである",
        "TCPはブロードキャストを使用する",
        "TCPにはパケットの順序番号がある",
        "TCPはベストエフォートの転送を提供する"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0015.jpg",
      "answer_image": "page_0018.png",
      "explanation": "TCPは同期を実現し、パケットに順序番号を付けて信頼性の高い通信を提供します。"
    },
    {
      "id": 20,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPとUDPは、パケット配信を保証する方法がどのように違いますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TCPは再送信、確認、パリティチェックを使用し、UDPは巡回冗長検査のみを使用する",
        "TCPは2次元のパリティチェック、チェックサム、巡回冗長検査を使用し、UDPは再送信のみを使用する",
        "TCPはチェックサム、パリティチェック、再送信を使用し、UDPは確認応答のみを使用する",
        "TCPはチェックサム、確認応答、再送信を使用し、UDPはチェックサムのみを使用する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0016.jpg",
      "answer_image": "page_0019.png",
      "explanation": "TCPは確認応答と再送信で信頼性を提供し、UDPはチェックサムのみを使用します。"
    },
    {
      "id": 21,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "TCPとUDPのプロトコルの説明として適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.TCP: B、C    2.UDP: A、D",
        "1.TCP: A、D    2.UDP: B、C",
        "1.TCP: A、C    3.UDP: B、D",
        "1.TCP: A、B    4.UDP: C、D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0016.jpg",
      "answer_image": "page_0020.png",
      "has_diagram": true,
      "explanation": "TCPはデータチャネルを必要とするパケットに含まれる情報特に基づいて送信される、データを送信する前にクライアントとサーバが接続を確立する必要がある。UDPはデータを確実に送信する必要がない場合に適している、音声ストリーミングなどの低遅延データ転送に適している。"
    },
    {
      "id": 22,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "2つのエンドポイント間の接続を確立する方法でTCPとUDPで異なる点を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TCPは同期パケットを使用し、UDPは確認パケットを使用する",
        "TCPは3ウェイハンドシェイクを使用し、UDPはメッセージ配信を保証しない",
        "UDPはフレームヘッダーでSYN、SYN ACKおよびFINビットを使用し、TCPはSYN、SYN ACKおよびACKビットを使用する",
        "UDPは信頼できるメッセージ転送を提供し、TCPはコネクションレスプロトコルである"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0017.jpg",
      "answer_image": "page_0021.png",
      "explanation": "TCPは3ウェイハンドシェイクで接続を確立しますが、UDPは接続確立なしでデータを送信します。"
    },
    {
      "id": 23,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "各アプリケーションプロトコルの適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A②  B①  C②  D①  E②",
        "A①  B②  C①  D①  E②",
        "A②  B①  C①  D①  E②",
        "A②  B①  C①  D②  E①"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0017.jpg",
      "answer_image": "page_0022.png",
      "has_diagram": true,
      "explanation": "DHCP、DNSの各プロトコルの役割を正しく理解する必要があります。"
    },
    {
      "id": 24,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "アプリケーションプロトコルとトランスポートプロトコルの適切な対応付けを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.TCP: A、B、E    2.UDP: C、D、F",
        "1.TCP: A、C、E    2.UDP: B、D、F",
        "1.TCP: B、C、F    2.UDP: A、D、E",
        "1.TCP: B、C、E    2.UDP: A、D、F"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0018.jpg",
      "answer_image": "page_0023.png",
      "has_diagram": true,
      "explanation": "DHCP、FTP、SMTP、DNS、SSH、TFTPの各プロトコルが使用するトランスポート層を理解する必要があります。"
    },
    {
      "id": 25,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "動的ホスト構成プロトコル(DHCP)の役割についての正しい説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "DHCPサーバは、クライアントIPアドレスを動的にリースする",
        "DHCPクライアントは、最大4つのDNSサーバアドレスを要求できる",
        "DHCPサーバは、IPアドレスのプールから特定のIPアドレスを除外する機能を提供する",
        "DHCPサーバは、クライアントに更新を要求せずにIPアドレスを割り当てる",
        "DHCPクライアントは、割り当て可能なIPアドレスのプールを維持する"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0018.jpg",
      "answer_image": "page_0024.png",
      "explanation": "DHCPサーバはIPアドレスを動的に割り当て、特定のアドレスを除外することができます。"
    },
    {
      "id": 26,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "R1にDHCPからIP構成を取得するトポロジを展開しています。スイッチとDHCPサーバが正しい構成である場合、タスクを完了するためにR1とR2で構成する必要があるコマンドを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "B",
        "D",
        "A",
        "C",
        "E"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0019.jpg",
      "answer_image": "page_0025.png",
      "has_diagram": true,
      "explanation": "DHCPリレーエージェントの設定にはip helper-addressコマンドが必要です。"
    },
    {
      "id": 27,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "ネットワーク管理者は2つのサイトにIPアドレスを割り当てるためにDHCPサーバを実装しなければいけません。ルータがDHCPサーバへDHCP DISCOVERメッセージを転送できるようにするために、どの機能を有効にしますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "DHCPプール",
        "DHCPバインディング",
        "DHCPスヌーピング",
        "DHCPリレーエージェント"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0019.jpg",
      "answer_image": "page_0026.png",
      "explanation": "DHCPリレーエージェントは、ブロードキャストをユニキャストに変換してDHCPサーバに転送します。"
    },
    {
      "id": 28,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DHCPのhelper-addressコマンドを設定する適切な場所を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "クライアントに最も近いルータ",
        "サーバに最も近いルータ",
        "スイッチトランクインタフェース",
        "パス上のすべてのルータ"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0026.png",
      "explanation": "DHCPヘルパーアドレスは、クライアントに最も近いルータのインターフェイスに設定します。"
    },
    {
      "id": 29,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DHCPサーバに設定される情報として正しいものはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ドメインに参加するユーザのユーザ名・パスワード",
        "有効なIPアドレスのリストが記載されたプール",
        "パブリックIPアドレスとそれに対応した名前のリスト",
        "スタティックに割り当てられたMACアドレスのリスト"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0027.png",
      "explanation": "DHCPサーバには、割り当て可能なIPアドレスのプールが設定されます。"
    },
    {
      "id": 30,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "デフォルトゲートウェイが自動的に配布されるようルータにDHCPを構成するためのコマンドとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip helper-address",
        "default-gateway",
        "default-router",
        "dns-server"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0020.jpg",
      "answer_image": "page_0027.png",
      "explanation": "DHCPプール設定でdefault-routerコマンドを使用してデフォルトゲートウェイを配布します。"
    },
    {
      "id": 31,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "DNSのコンポーネントとその説明に関して適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A=①  B=②  C=⑤  D=④  E=③",
        "A=①  B=②  C=④  D=③  E=⑤",
        "A=③  B=②  C=⑤  D=①  E=④",
        "A=③  B=②  C=①  D=④  E=⑤"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0021.jpg",
      "answer_image": "page_0028.png",
      "has_diagram": true,
      "explanation": "DNSの各コンポーネント(キャッシュ、DNS、ドメイン、ネームリゾルバ、no ip domain lookup)の役割を正しく理解する必要があります。"
    },
    {
      "id": 32,
      "category": "TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明",
      "question": "ファイル転送プロトコルの種類とその説明について、正しい組み合わせを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "①=A, C, E  ②=B, D, F",
        "①=A, D, F  ②=B, C, E",
        "①=B, D, E  ②=A, C, F",
        "①=A, D, E  ②=B, C, F"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0022.jpg",
      "answer_image": "page_0029.png",
      "has_diagram": true,
      "explanation": "FTPとTFTPの特徴を正しく理解する必要があります。FTPはIOS展開時の信頼性を提供、ユーザ認証を必要としない、TCPを使用。TFTPは69番ポートを使用、20,21番ポートを使用、UDPを使用。"
    },
    {
      "id": 33,
      "category": "ルーティングの機能について",
      "question": "図のようにルーティングテーブルにルートが登録されています。学習したプレフィックスとサブネットマスクの正しい組み合わせはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1-A, 2-C, 3-D, 4-E, 6-B",
        "1-B, 2-C, 3-D, 4-E, 5-A",
        "1-E, 2-C, 3-D, 4-B, 7-A",
        "1-D, 2-E, 3-B, 4-C, 8-A"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0023.jpg",
      "answer_image": "page_0030.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルのエントリからプレフィックスとサブネットマスクを正しく識別します。"
    },
    {
      "id": 34,
      "category": "ルーティングの機能について",
      "question": "EIGRPを実行しているルータは、2つの異なるパスから同じルートを学習しました。最適なパスを選択するためのパラメータを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "メトリック",
        "コスト",
        "ホップ数",
        "アドミニストレーティブディスタンス"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0023.jpg",
      "answer_image": "page_0031.png",
      "explanation": "EIGRPはメトリック値(帯域幅と遅延から計算)を使用して最適パスを選択します。"
    },
    {
      "id": 35,
      "category": "ルーティングの機能について",
      "question": "R1がインターネットアクセスするために利用するルートタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネットワークルート",
        "フローティングスタティックルート",
        "デフォルトルート",
        "ホストルート"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0024.jpg",
      "answer_image": "page_0032.png",
      "has_diagram": true,
      "explanation": "インターネットアクセスには通常デフォルトルート(0.0.0.0/0)を使用します。"
    },
    {
      "id": 36,
      "category": "ルーティングの機能について",
      "question": "図のトポロジとR3のルーティングテーブルを見て、192.168.0.200から192.168.0.1宛てに送信されたパケットがどのように転送されるか、正しい説明を次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R3からR1へ転送される",
        "R3からR1、およびR3からR2を経由してR1へ転送される",
        "R3からR2を経由してR1へ転送される",
        "R3からR1を経由してR2へ転送される"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0025.jpg",
      "answer_image": "page_0033.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルの内容から、複数のパスが存在する場合の転送動作を理解します。"
    },
    {
      "id": 37,
      "category": "ルーティングの機能について",
      "question": "デフォルトのアドミニストレイティブディスタンス値が最も小さいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "内部BGP",
        "RIP",
        "OSPF",
        "IS-IS",
        "EIGRP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0025.jpg",
      "answer_image": "page_0034.png",
      "explanation": "OSPFのデフォルトAD値は110で、選択肢の中では比較的小さい値です。"
    },
    {
      "id": 38,
      "category": "ルーティングの機能について",
      "question": "複数のルーティングプロトコルで同じ経路を学習していると想定します。どのプロトコルで学習したものをルーティングテーブルのエントリとして登録しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "OSPF",
        "BGP",
        "CONNECTED",
        "EIGRP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0035.png",
      "explanation": "CONNECTEDルート(直接接続)のAD値は0で最も優先されます。"
    },
    {
      "id": 39,
      "category": "ルーティングの機能について",
      "question": "OSPFとEIGRPで同じ経路を学習した場合にルーティングテーブルに登録される経路のAD値を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "90",
        "110",
        "115",
        "120"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0036.png",
      "explanation": "EIGRPのAD値は90、OSPFは110なので、EIGRPが優先されます。"
    },
    {
      "id": 40,
      "category": "ルーティングの機能について",
      "question": "IS-IS、OSPF、RIP、および内部EIGRPを介してルート192.168.12.0/24を学習しました。ルーティングテーブルにインストールされているルーティングプロトコルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "RIP",
        "OSPF",
        "IS-IS",
        "内部EIGRP"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0026.jpg",
      "answer_image": "page_0037.png",
      "explanation": "内部EIGRPのAD値は90で、他のプロトコルより優先されます。"
    },
    {
      "id": 41,
      "category": "ルーティングの機能について",
      "question": "図の構成において、ネットワークエンジニアがR4でルーティングテーブルを確認しています。ネットワーク192.168.10.0/24へのネクストホップについて正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ディスタンスベクタルーティングプロトコルであるため、ネクストホップは10.1.2.1である",
        "アドミニストレイティブディスタンスが優れているため、ネクストホップは10.1.0.1である",
        "リンクステートルーティングプロトコルであるため、ネクストホップは10.1.2.1である",
        "メトリックが大きいため、ネクストホップはは10.1.0.1である"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0027.jpg",
      "answer_image": "page_0038.png",
      "has_diagram": true,
      "explanation": "複数のルーティングプロトコルが同じ宛先を学習した場合、AD値が小さい方が優先されます。"
    },
    {
      "id": 42,
      "category": "ルーティングの機能について",
      "question": "ルーティングテーブルに以下の経路があります。192.168.192.11宛てのパケットを転送するために利用する経路を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.192.0/26",
        "192.168.0.0/16",
        "192.168.0.0/18",
        "192.168.192.0/30"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0027.jpg",
      "answer_image": "page_0039.png",
      "explanation": "最長一致の原則により、最も具体的な(プレフィックスが長い)ルートが選択されます。"
    },
    {
      "id": 43,
      "category": "ルーティングの機能について",
      "question": "ホストIPアドレス 192.168.10.4の最も長いプレフィックス一致のエントリはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "②",
        "①",
        "④",
        "③"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0028.jpg",
      "answer_image": "page_0040.png",
      "has_diagram": true,
      "explanation": "192.168.10.4に最も一致する(プレフィックス長が最も長い)ルートを選択します。"
    },
    {
      "id": 44,
      "category": "ルーティングの機能について",
      "question": "R1は3つの異なるルーティングプロトコルを実行しています。R1が宛先IP172.16.32.1で受信したパケットを転送するために使用するルート特性はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "メトリック",
        "最長のプレフィックス",
        "コスト",
        "管理距離"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0028.jpg",
      "answer_image": "page_0041.png",
      "has_diagram": true,
      "explanation": "ルート選択では最長プレフィックスマッチが最優先されます。"
    },
    {
      "id": 45,
      "category": "ルーティングの機能について",
      "question": "図のような設定のルータに対し、送信元が20.10.10.2、宛先が20.10.10.16のパケットが届いた場合のルータの処理として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルートが学習されるまで、パケットをキューに入れる",
        "適切なネクストホップへ転送する",
        "学習したすべてのネクストホップにパケットをフラッディングする",
        "パケットを破棄する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0029.jpg",
      "answer_image": "page_0042.png",
      "has_diagram": true,
      "explanation": "宛先ネットワークへのルートが存在しない場合、パケットは破棄されます。"
    },
    {
      "id": 46,
      "category": "ルーティングの機能について",
      "question": "192.168.16.2を宛先とするトラフィックに対して選択するルートを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.16.0/24",
        "192.168.16.0/26",
        "192.168.16.0/27",
        "192.168.16.0/21"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0029.jpg",
      "answer_image": "page_0043.png",
      "has_diagram": true,
      "explanation": "最長プレフィックスマッチの原則により、/26が選択されます。"
    },
    {
      "id": 47,
      "category": "ルーティングの機能について",
      "question": "ルータが以下のルーティング情報を持っている場合、192.168.2.16へのトラフィックをどのように処理しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "宛先アドレスを含む最長のプレフィックスを持つため、RIPルートを選択する",
        "宛先アドレスを含む最長のプレフィックスを持つため、OSPFルートを選択する",
        "3つのルートすべてのトラフィックを負荷分散する",
        "アドミニストレイティブディスタンスが最も低いため、EIGRPルートを選択する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0030.jpg",
      "answer_image": "page_0044.png",
      "has_diagram": true,
      "explanation": "同じプレフィックス長の場合、AD値が最も低いルートが選択されます。"
    },
    {
      "id": 48,
      "category": "ルーティングの機能について",
      "question": "10.10.13.214宛のパケットを送信するために使用する経路を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "10.10.13.144/28",
        "10.10.10.0/28",
        "10.10.13.0/25",
        "10.10.13.208/29"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0030.jpg",
      "answer_image": "page_0045.png",
      "has_diagram": true,
      "explanation": "10.10.13.214を含む最も具体的なルートは10.10.13.208/29です。"
    },
    {
      "id": 49,
      "category": "ルーティングの機能について",
      "question": "ホスト172.16.0.14宛でのパケットの転送先はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "165.209.200.254 via Serial0/0/0",
        "165.209.200.246 via Serial0/1/0",
        "165.209.200.254 via Serial0/0/1",
        "165.209.200.250 via Serial0/0/0"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0031.jpg",
      "answer_image": "page_0046.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルを確認して適切なネクストホップを選択します。"
    },
    {
      "id": 50,
      "category": "ルーティングの機能について",
      "question": "R1は図のようなルーティングテーブルを持っています。R1が172.21.3.14宛のパケットを受信すると、どこに転送しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "192.168.1.254 via FastEthernet0/1",
        "192.168.1.250 via FastEthernet0/0",
        "192.168.1.246 via FastEthernet1/0",
        "192.168.1.254 via FastEthernet0/0"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0031.jpg",
      "answer_image": "page_0047.png",
      "has_diagram": true,
      "explanation": "ルーティングテーブルのエントリから適切なネクストホップインターフェイスを特定します。"
    },
    {
      "id": 51,
      "category": "ルーティングの機能について",
      "question": "R1は図のようなルーティングテーブルを持っています。20.1.1.5宛のパケットを受信すると、どこに転送しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Loopback0",
        "20.1.1.4",
        "20.1.1.50",
        "20.1.1.3"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0032.jpg",
      "answer_image": "page_0048.png",
      "has_diagram": true,
      "explanation": "最長プレフィックスマッチに基づいてネクストホップを選択します。"
    },
    {
      "id": 52,
      "category": "ルーティングの機能について",
      "question": "ルータは、ルーティングテーブルに図のようなルート情報を持っています。このルート情報にしたがってルーティングされるパケットの宛先IPアドレスはどれですか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "172.16.1.17",
        "172.16.1.127",
        "172.16.1.61",
        "172.16.1.64",
        "172.16.1.254"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0032.jpg",
      "answer_image": "page_0049.png",
      "has_diagram": true,
      "explanation": "172.16.1.0/26サブネットに含まれるアドレスを選択します。"
    },
    {
      "id": 53,
      "category": "Ciscoルータの設定",
      "question": "スイッチで図のような確認を行いました。問題の原因として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "間違ったケーブルの種類",
        "スパニングツリー",
        "ポートセキュリティ",
        "shutdownコマンド"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0033.jpg",
      "answer_image": "page_0050.png",
      "has_diagram": true,
      "explanation": "インターフェイスがadministratively downの状態は、shutdownコマンドが実行されていることを示します。"
    },
    {
      "id": 54,
      "category": "Ciscoルータの設定",
      "question": "CDPに関する説明として正しいものを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "CDPはネットワーク層プロトコルである",
        "CDPはCisco独自のプロトコルである",
        "CDPはデータリンク層プロトコルである",
        "CDPはIEEE標準のプロトコルである",
        "CDPは直接接続されたCisco機器を検出できる",
        "CDPは直接接続されていないCisco機器を検出できる"
      ],
      "correct_answers": [1, 2, 4],
      "answer_count": 3,
      "question_image": "0033.jpg",
      "answer_image": "page_0051.png",
      "explanation": "CDPはCisco独自のデータリンク層プロトコルで、直接接続されたCisco機器を検出します。"
    },
    {
      "id": 55,
      "category": "Ciscoルータの設定",
      "question": "特定のインターフェースにおいてCDPを無効にするコマンドとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "no cdp run",
        "no cdp enable",
        "no cdp advertise-v2",
        "clear cdp table"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0033.jpg",
      "answer_image": "page_0051.png",
      "explanation": "インターフェイスレベルでCDPを無効にするには、no cdp enableコマンドを使用します。"
    },
    {
      "id": 56,
      "category": "Ciscoルータの設定",
      "question": "以下の出力結果が得られるコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show cdp neighbors",
        "show ip route",
        "show ip interface",
        "show interface"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0052.png",
      "has_diagram": true,
      "explanation": "CDPネイバー情報とケイパビリティコードを表示するのは、show cdp neighborsコマンドです。"
    },
    {
      "id": 57,
      "category": "Ciscoルータの設定",
      "question": "Cisco IOSでLLDPをグローバルに有効にするコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "lldp enable",
        "lldp run",
        "lldp send",
        "cdp run",
        "cdp enable"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0053.png",
      "explanation": "グローバルコンフィグレーションモードでlldp runコマンドを使用してLLDPを有効にします。"
    },
    {
      "id": 58,
      "category": "Ciscoルータの設定",
      "question": "ネットワークエンジニアであるあなたは、マルチベンダーネットワークのダイアグラムを作成することになりました。トポロジをマップできるようにするためには、Ciscoデバイスでどのコマンドを実行しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Device(config)# cdp run",
        "Device(config)# lldp run",
        "Device(config)# flow-sampler-map topology",
        "Device(config)# cdp enable"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0034.jpg",
      "answer_image": "page_0053.png",
      "explanation": "マルチベンダー環境では、標準プロトコルのLLDPを使用します。"
    },
    {
      "id": 59,
      "category": "Ciscoルータの設定",
      "question": "スイッチが図のように動作しています。スイッチの構成を変更し、毎分LLDPパケットを送信し、LLDPの情報が3分ごとに更新されるようにする必要があります。正しい設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "D",
        "B",
        "C",
        "A"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0035.jpg",
      "answer_image": "page_0054.png",
      "has_diagram": true,
      "explanation": "LLDPタイマーを1分、ホールドタイムを3分に設定します。"
    },
    {
      "id": 60,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "pingを実行したときに表示される出力文字と説明の組み合わせとして、正しいものを1つ選びなさい。",
      "choices": [
        "A③ B② C④ D⑤ E①",
        "A② B① C③ D④ E⑤",
        "A④ B③ C② D⑤ E①",
        "A① B② C③ D⑤ E④"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0036.jpg",
      "answer_image": "page_0055.png",
      "has_diagram": true,
      "explanation": "pingの出力文字: Q=存続時間経過、U=ICMPを受信、!=宛先不達、.=ビジー状態、&=タイムアウト"
    },
    {
      "id": 61,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "ホストから異なるネットワーク上の他のホストまで正しく通信できるパスがあることを確認する場合の正しい作業を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "リモートネットワークのホストアドレスにpingする",
        "ループバックアドレスにpingする",
        "ホストのデフォルトゲートウェイのIPアドレスにpingする",
        "ローカルインタフェースのアドレスにpingする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0036.jpg",
      "answer_image": "page_0056.png",
      "explanation": "リモートネットワークのホストアドレスにpingすることで、エンドツーエンドの通信を確認できます。"
    },
    {
      "id": 62,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "フレームチェックシーケンスエラーがスイッチで発生したときに上昇するカウンタを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "入力エラー",
        "ジャイアントフレーム",
        "runts",
        "CRCエラー"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0036.jpg",
      "answer_image": "page_0057.png",
      "explanation": "FCSエラーが発生すると、入力エラーとCRCエラーのカウンタが上昇します。"
    },
    {
      "id": 63,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "レイトコリジョンの原因となる要素を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "CSMA/CDを使用する",
        "送信デバイスがフレームを再度送信する前に15秒待機する場合",
        "ケーブルが長い",
        "フレームの32バイト目が送信された後に衝突が発生したとき",
        "片方のデバイスのみ半二重状態である"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0037.jpg",
      "answer_image": "page_0058.png",
      "explanation": "ケーブルが長い場合や、片方のデバイスのみ半二重状態である場合にレイトコリジョンが発生します。"
    },
    {
      "id": 64,
      "category": "簡易ネットワークのトラブルシューティング",
      "question": "同時にフレームを送信している2つのホストを検出した。この状態は、フレームの最初の64バイトが受信された後に発生する。どのインタフェースカウンタが増加しますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "collision",
        "late collision",
        "CRC",
        "runt"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0058.png",
      "explanation": "64バイト送信後の衝突はレイトコリジョンとしてカウントされます。"
    },
    {
      "id": 65,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレス「2001:0db8:0000:0000:0800:0004:5000:683C」の正しい省略表記について、正しいものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2001:db8:800:4:5000:683C",
        "2001:db8:0::800:4:5:683C",
        "2001:0db8::8:4:5:683C",
        "2001::db8:0000::800:3:5000:683C"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0059.png",
      "explanation": "IPv6アドレスの省略表記では、先頭のゼロを省略し、連続するゼロのグループを::で表します。"
    },
    {
      "id": 66,
      "category": "基本的なIPv6の概要",
      "question": "IPv6のアドレスについて、IPv4パブリックアドレスと同じ方法でパブリックにルーティング可能なアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "グローバルユニキャスト",
        "固有ローカル(ユニークローカル)",
        "リンクローカル",
        "マルチキャスト"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0037.jpg",
      "answer_image": "page_0059.png",
      "explanation": "グローバルユニキャストアドレスは、IPv4のパブリックアドレスと同様にインターネット上でルーティング可能です。"
    },
    {
      "id": 67,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレスにおいて、インターネット上でルーティングされないアドレスタイプはどれですか。次の選択肢の中から2つ選びなさい。",
      "choices": [
        "リンクローカル",
        "グローバルユニキャスト",
        "マルチキャスト",
        "ユニークローカル"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0038.jpg",
      "answer_image": "page_0060.png",
      "explanation": "リンクローカルアドレスとユニークローカルアドレスは、インターネット上でルーティングされません。"
    },
    {
      "id": 68,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレスの特性と種類について、適切な組み合わせを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "①=A、B ②=C、D",
        "①=D、A ②=B、C",
        "①=C、D ②=A、B",
        "①=B、C ②=D、A"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0038.jpg",
      "answer_image": "page_0061.png",
      "has_diagram": true,
      "explanation": "リンクローカルアドレスの特性とユニークローカルアドレスの範囲を正しく組み合わせます。"
    },
    {
      "id": 69,
      "category": "基本的なIPv6の概要",
      "question": "パケットを単一のアドレスでなくグループアドレスに送信するIPv6アドレスブロックはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2000::/3",
        "FF00::/8",
        "FC00::/7",
        "FE80::/10"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0038.jpg",
      "answer_image": "page_0062.png",
      "explanation": "FF00::/8はマルチキャストアドレスの範囲で、グループアドレスに送信します。"
    },
    {
      "id": 70,
      "category": "基本的なIPv6の概要",
      "question": "IPv6が有効なインタフェースが参加するマルチキャストアドレスを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "FF02::2",
        "FF02::10",
        "FF02::5",
        "FF02::1"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0039.jpg",
      "answer_image": "page_0062.png",
      "explanation": "FF02::1は全ノードマルチキャスト、FF02::2は全ルータマルチキャストアドレスです。"
    },
    {
      "id": 71,
      "category": "基本的なIPv6の概要",
      "question": "IPv6ユニキャストアドレスについての正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "パケットは、アドレスを持つ最も近いインタフェースにルーティングされる",
        "グループアドレスとして使用される",
        "アドレスはプレフィックスFF00::/8を使用する",
        "他のホストと重複しないユニークなアドレスを設定する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0063.png",
      "explanation": "ユニキャストアドレスは単一のインタフェースを識別するユニークなアドレスです。"
    },
    {
      "id": 72,
      "category": "基本的なIPv6の概要",
      "question": "EUI-64アドレスの生成について正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "インタフェースのMACアドレスが変更なしでインタフェースIDとして使用される",
        "インタフェースIDはランダムな64ビット値として構成される",
        "インタフェースのMACアドレスの先頭に文字FE80が挿入される",
        "インタフェースの元のMACアドレスの7番目のビットが反転する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0063.png",
      "explanation": "EUI-64では、MACアドレスの7番目のビットを反転してインタフェースIDを生成します。"
    },
    {
      "id": 73,
      "category": "基本的なIPv6の概要",
      "question": "インタフェースのMACアドレスから派生したインタフェースIDを使う場合、IPv6グローバルユニキャストアドレスを割り当てるにはどのアクションを実行する必要がありますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "EUI-64ビットプロセスを無効にする",
        "ネットワーク上にステートフルDHCPv6サーバーを構成する",
        "インタフェースでSLAACを有効にする",
        "リンクローカルアドレスを明示的に割り当てる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0039.jpg",
      "answer_image": "page_0064.png",
      "explanation": "SLAACを有効にすることで、MACアドレスからIPv6アドレスを自動生成できます。"
    },
    {
      "id": 74,
      "category": "基本的なIPv6の概要",
      "question": "CiscoルータでIPv6接続を行うために使用するコマンドを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "R1(config-if)# ipv6 unicast-routing",
        "R1(config-if)# ipv6 address 2001:DB8:0:5::1/64",
        "R1(config)# ipv6 unicast-routing",
        "R1(config-if)# no shutdown",
        "R1(config)# no shutdown",
        "R1(config-if)# ip address 2001:DB8:0:5::1/64"
      ],
      "correct_answers": [1, 2, 3],
      "answer_count": 3,
      "question_image": "0040.jpg",
      "answer_image": "page_0065.png",
      "explanation": "IPv6を有効にするには、グローバルでipv6 unicast-routingを設定し、インタフェースにIPv6アドレスを割り当て、インタフェースを有効化します。"
    },
    {
      "id": 75,
      "category": "基本的なIPv6の概要",
      "question": "IPv6のアドレスについてプレフィックスを指定し、MACアドレスからインタフェースIDを生成するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ipv6 address dhcp",
        "ipv6 address 2001:DB8:5:112::/64 eui-64",
        "ipv6 address autoconfig",
        "ipv6 address 2001:DB8:5:112::2/64 link-local"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0040.jpg",
      "answer_image": "page_0065.png",
      "explanation": "eui-64オプションを使用すると、MACアドレスからインタフェースIDを自動生成します。"
    },
    {
      "id": 76,
      "category": "基本的なIPv6の概要",
      "question": "IPv6アドレス「2001:0DB8:0000:0000:0000:0000:0000:0001」の正しい省略方法を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2001:0DB8::1",
        "2001:DB8::1",
        "2001::DB8::1",
        "2001:DB8:0:0:0:0:0:1"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0041.jpg",
      "answer_image": "page_0066.png",
      "explanation": "IPv6アドレスの省略では、先頭のゼロを省略し、連続するゼロのグループを::で一度だけ表現できます。"
    },
    {
      "id": 77,
      "category": "スタティックルーティングの設定",
      "question": "R1の静的ルートをデフォルト以外の管理距離でネットワーク192.168.3.0/24に設定するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip route 5 192.168.3.0 255.255.255.0 192.168.2.2",
        "ip route 192.168.3.0 255.255.255.0 192.168.2.2 1",
        "ip route 1 192.168.3.1 255.255.255.0 192.168.2.2",
        "ip route 192.168.3.0 255.255.255.0 192.168.2.2 5"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0042.jpg",
      "answer_image": "page_0067.png",
      "has_diagram": true,
      "explanation": "スタティックルートでデフォルト以外の管理距離を設定するには、コマンドの最後にAD値を指定します。正しい構文は「ip route [宛先ネットワーク] [サブネットマスク] [ネクストホップ] [AD値]」です。"
    },
    {
      "id": 78,
      "category": "スタティックルーティングの設定",
      "question": "宛先IPアドレス10.10.1.22のパケットを転送するためにどのスタティックルートを選択しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ip route 10.10.1.20 255.255.255.254 10.10.255.1",
        "ip route 10.10.1.0 255.255.255.240 10.10.255.1",
        "ip route 10.10.1.16 255.255.255.252 10.10.255.1",
        "ip route 10.10.1.20 255.255.255.252 10.10.255.1"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0042.jpg",
      "answer_image": "page_0068.png",
      "explanation": "10.10.1.22を含むサブネットは10.10.1.20/30(255.255.255.252)です。このサブネットには10.10.1.20-10.10.1.23が含まれます。"
    },
    {
      "id": 79,
      "category": "スタティックルーティングの設定",
      "question": "R1は、ルーティングテーブルエントリが一致しないすべてのトラフィックを192.168.1.1に送信する必要があります。このタスクを実行する構成はどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "C",
        "A",
        "B",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0043.jpg",
      "answer_image": "page_0069.png",
      "explanation": "デフォルトルートを設定するには、ip route 192.168.1.1 0.0.0.0 0.0.0.0コマンドを使用します。これにより、すべての不明な宛先トラフィックが指定されたネクストホップに転送されます。"
    },
    {
      "id": 80,
      "category": "スタティックルーティングの設定",
      "question": "フローティングスタティックルートが設定されている場合、プライマリルートに障害が発生したときにバックアップルートが使用されることを保証するアクションを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "バックアップルートがセカンダリになるように、プライマリルートでアドミニストレーティブディスタンスを大きくする",
        "フローティングスタティックルートは、バックアップとして使用されるように、プライマリルートよりもアドミニストレーティブディスタンスを大きくする",
        "負荷分散を構成する",
        "バックアップルートでメトリック値を小さくする"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0043.jpg",
      "answer_image": "page_0070.png",
      "explanation": "フローティングスタティックルートは、プライマリルートよりも大きいAD値を設定することで、バックアップとして機能します。プライマリが停止した場合のみルーティングテーブルに追加されます。"
    },
    {
      "id": 81,
      "category": "スタティックルーティングの設定",
      "question": "フローティングスタティックルートを設定する理由として適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "プライマリパスがダウンしたときにトラフィックをセカンダリパスに自動的にルーティングする",
        "ルータから送信されるトラフィックのリターンパスを制御する",
        "パケットの送信元IPに基づいて異なる方法でトラフィックをルーティングする",
        "静的ルーティングによる負荷分散をサポートする",
        "ダイナミックルーティングプロトコルが失敗したときにフォールバック静的ルーティングを有効にする"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0044.jpg",
      "answer_image": "page_0071.png",
      "explanation": "フローティングスタティックルートは、プライマリパスの障害時の自動フェイルオーバーと、ダイナミックルーティングプロトコルの障害時のバックアップとして使用されます。"
    },
    {
      "id": 82,
      "category": "スタティックルーティングの設定",
      "question": "図を見て答えなさい。R2が、宛先ネットワーク10.1.1.0/24に到達するために選択するプロトコルはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スタティック(静的)",
        "eBGP",
        "OSPF",
        "EIGRP"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0044.jpg",
      "answer_image": "page_0072.png",
      "has_diagram": true,
      "explanation": "スタティックルート(ip route)のAD値は1で、他のダイナミックルーティングプロトコルよりも優先されます。"
    },
    {
      "id": 83,
      "category": "スタティックルーティングの設定",
      "question": "以下のコマンドを実行した後の説明として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "コマンドが入力できない",
        "既存のデフォルトルートを上書きする",
        "負荷分散が構成される",
        "ルーティングテーブルに情報がインストールされず、メイン経路がダウンした場合のみ利用される"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0045.jpg",
      "answer_image": "page_0073.png",
      "has_diagram": true,
      "explanation": "AD値120を持つデフォルトルートは、より小さいAD値を持つルートがダウンした場合のみルーティングテーブルにインストールされます。"
    },
    {
      "id": 84,
      "category": "スタティックルーティングの設定",
      "question": "図のような構成でR1 Lo0とR3 Lo0間で通信するためには、R2でスタティックルートをどのように設定すればよいですか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "ipv6 route 2000::1/128 2012::2",
        "ipv6 route 2000::1/128 2012::1",
        "ipv6 route 2000::1/128 gi0/1",
        "ipv6 route 2000::3/128 2023::3",
        "ipv6 route 2000::3/128 gi0/0"
      ],
      "correct_answers": [1, 3],
      "answer_count": 2,
      "question_image": "0045.jpg",
      "answer_image": "page_0074.png",
      "has_diagram": true,
      "explanation": "R2からR1のLoopback0(2000::1/128)へは2012::1経由、R3のLoopback0(2000::3/128)へは2023::3経由のスタティックルートを設定します。"
    },
    {
      "id": 85,
      "category": "スタティックルーティングの設定",
      "question": "図のような構成において、以下の条件を満たすためにR1で設定すべき項目を、次の選択肢の中から2つ選びなさい。・2001:12:23::/64宛てのパケットは、R2を通る・2001:12:23::1/64宛てのパケットは、R3を通る",
      "choices": [
        "ipv6 route 2001:12:23::/128 fd00:1:2::2",
        "ipv6 route 2001:12:23::/64 fd00:1:2::2",
        "ipv6 route 2001:12:23::1/128 fd00:1:3::3",
        "ipv6 route 2001:12:23::1/64 fd00:1:2::2",
        "ipv6 route 2001:12:23::1/64 fd00:12:2 200"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0046.jpg",
      "answer_image": "page_0075.png",
      "has_diagram": true,
      "explanation": "ネットワーク全体(2001:12:23::/64)へはR2経由、特定のホスト(2001:12:23::1/128)へはR3経由のルートを設定します。最長プレフィックスマッチにより、より具体的なルートが優先されます。"
    },
    {
      "id": 86,
      "category": "VLANとトランクの実装",
      "question": "図のような構成において音声及びデータトラフィックを扱うための適切な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0047.jpg",
      "answer_image": "page_0077.png",
      "has_diagram": true,
      "explanation": "音声とデータを分離するには、インターフェイスをトランクモードに設定し、データVLAN(300)をトランクVLANとして、音声VLAN(400)をvoice vlanとして設定します。"
    },
    {
      "id": 87,
      "category": "VLANとトランクの実装",
      "question": "ネットワーク管理者は下記のようにVoice VLANを設定しています。スイッチのGi1/1/1にCisco IP Phoneを接続した場合、IP Phoneのフレームをどのように扱いますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "IP PhoneはVLAN50内で音声データを送受信する。IP Phoneに接続されているホストはVLAN1内でデータを送受信する",
        "IP PhoneとIP Phoneに接続されているホストはともにVLANへ接続できない",
        "IP PhoneとIP Phoneに接続されているホストはともにVLAN50内でデータを送受信する",
        "IP PhoneはVLAN50内で音声データを送受信する。IP Phoneに接続されているホストはVLANへ接続できない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0048.jpg",
      "answer_image": "page_0078.png",
      "explanation": "Voice VLANを設定すると、IP Phoneは指定されたVLAN(50)で音声を送信し、接続されているPCはアクセスVLAN(デフォルトVLAN1)でデータを送信します。"
    },
    {
      "id": 88,
      "category": "VLANとトランクの実装",
      "question": "Voice VLANが設定されているかを確認するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show cdp neighbor",
        "show interface trunk",
        "show ip interface brief",
        "show interface fa0/2 switchport"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0048.jpg",
      "answer_image": "page_0079.png",
      "explanation": "show interface [インターフェイス] switchportコマンドで、Voice VLANの設定を含むスイッチポートの詳細情報を確認できます。"
    },
    {
      "id": 89,
      "category": "VLANとトランクの実装",
      "question": "SW1で、インターフェイスGi0/1とGi0/2を設定する必要があります。PC1とPC2はデータVLANに含める必要があり、IP-Phoneは音声VLANに含める必要があります。要件を満たす設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0049.jpg",
      "answer_image": "page_0080.png",
      "has_diagram": true,
      "explanation": "Gi0/1はPC2用にアクセスモードでVLAN4を設定し、Gi0/2はIP-Phone用にトランクモードでVLAN4とVLAN5を設定します。"
    },
    {
      "id": 90,
      "category": "VLANとトランクの実装",
      "question": "複数のスイッチでVLAN設定を共有するためのプロトコルとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "CDP",
        "DTP",
        "VTP",
        "STP"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0050.jpg",
      "answer_image": "page_0081.png",
      "explanation": "VTP(VLAN Trunking Protocol)は、複数のスイッチ間でVLAN設定情報を同期するために使用されます。"
    },
    {
      "id": 91,
      "category": "VLANとトランクの実装",
      "question": "トランクになりうるスイッチポートの設定モードを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "desirable",
        "forwarding",
        "auto",
        "negotiate",
        "trunk",
        "transparent"
      ],
      "correct_answers": [0, 2, 4],
      "answer_count": 3,
      "question_image": "0050.jpg",
      "answer_image": "page_0082.png",
      "explanation": "DTPを使用したトランクネゴシエーションのモードには、trunk(常時トランク)、desirable(積極的にトランクを要求)、auto(相手の要求に応じる)があります。"
    },
    {
      "id": 92,
      "category": "VLANとトランクの実装",
      "question": "エンジニアであるあなたは、隣接するスイッチとアクティブにトランクリンクを形成できるようなインタフェースを計画しています。インタフェースにはどのコマンドを設定しますか、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "switchport mode dynamic desirable",
        "switchport mode trunk",
        "switchport mode dynamic auto",
        "switchport no negotiation"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0050.jpg",
      "answer_image": "page_0083.png",
      "explanation": "アクティブにトランクを形成するには、switchport mode trunkで固定トランクにするか、switchport mode dynamic desirableで積極的にトランクをネゴシエートします。"
    },
    {
      "id": 93,
      "category": "VLANとトランクの実装",
      "question": "PC AとServer間の通信ができるようにするために、SW-Aの設定をどのように変更すればよいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport trunk allowed vlan none",
        "switchport trunk allowed vlan remove 10-11",
        "switchport trunk allowed vlan 12",
        "switchport trunk allowed vlan add 13"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0051.jpg",
      "answer_image": "page_0084.png",
      "has_diagram": true,
      "explanation": "SW-AのトランクポートでVLAN13を許可する必要があります。switchport trunk allowed vlan add 13コマンドで既存の設定にVLAN13を追加します。"
    },
    {
      "id": 94,
      "category": "VLANとトランクの実装",
      "question": "エンジニアであるあなたは、トランクリンクを通過するVLAN10のトラフィックにタグ付けしないように設定する必要があります。どのコマンドを使用すればよいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport trunk encapsulation dot1q",
        "switchport trunk allowed vlan 10",
        "switchport mode trunk",
        "switchport trunk native vlan 10"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0051.jpg",
      "answer_image": "page_0085.png",
      "explanation": "Native VLANのトラフィックはタグなしで送信されます。switchport trunk native vlan 10コマンドでVLAN10をネイティブVLANに設定します。"
    },
    {
      "id": 95,
      "category": "VLANとトランクの実装",
      "question": "2台のSW間の接続の構成として正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "トランクは形成されるが、VLAN 99とVLAN 999はシャットダウン状態",
        "トランクは形成されず、ポートはerr-disabled",
        "トランクは形成されるが、一致しないネイティブVLANは単一のブロードキャストドメインにマージされる",
        "トランクは形成され、VLAN 99とVLAN 999はリンクを通過できる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0052.jpg",
      "answer_image": "page_0086.png",
      "has_diagram": true,
      "explanation": "両方のスイッチでトランク設定とencapsulation dot1qが一致し、VLAN 99と999がallowed vlanリストに含まれているため、トランクは正常に形成されます。"
    },
    {
      "id": 96,
      "category": "VLANとトランクの実装",
      "question": "以下のようにスイッチが設定されています。スイッチ間リンクの適切な動作モードを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセス",
        "トランク",
        "err-disabled",
        "リンクダウン"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0052.jpg",
      "answer_image": "page_0087.png",
      "has_diagram": true,
      "explanation": "Switch1がdynamic desirable、Switch2がdynamic autoの場合、DTPネゴシエーションによりトランクリンクが形成されます。"
    },
    {
      "id": 97,
      "category": "VLANとトランクの実装",
      "question": "ホスト同士がスイッチ間で通信できない理由として考えられるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネイティブVLANの不一致",
        "アクセスポートになっている",
        "インタフェースがシャットダウン",
        "すべてのVLANがトランクで有効になっていない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0053.jpg",
      "answer_image": "page_0089.png",
      "has_diagram": true,
      "explanation": "Switch1のネイティブVLANは999、Switch2のネイティブVLANは99で不一致です。ネイティブVLANの不一致により、VLAN1のトラフィックが正しく転送されません。"
    },
    {
      "id": 98,
      "category": "VLANとトランクの実装",
      "question": "Cisco IP Phoneに接続されたホストから受信したフレームに対するCisco IP Phoneのアクションとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネイティブVLANを使用して送信する",
        "フレームを変換して送信する",
        "アクセスVLANのタグをつける",
        "ドロップする"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0053.jpg",
      "answer_image": "page_0090.png",
      "explanation": "IP Phoneに接続されたPCからのデータフレームは、ネイティブVLAN(通常はアクセスVLAN)を使用してタグなしで転送されます。"
    },
    {
      "id": 99,
      "category": "VLANとトランクの実装",
      "question": "スイッチ1とスイッチ2の間でVLAN 76トラフィックのタグ付けを解除し、他のすべてのVLANはタグ付けしたままにしたい。適切なコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport private-vlan association host 76",
        "switchport access vlan 76",
        "switchport trunk allowed vlan 76",
        "switchport trunk native vlan 76"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0054.jpg",
      "answer_image": "page_0091.png",
      "has_diagram": true,
      "explanation": "Native VLANに指定されたVLANはタグなしで送信されます。switchport trunk native vlan 76コマンドで設定します。"
    },
    {
      "id": 100,
      "category": "VLANとトランクの実装",
      "question": "図を見て答えなさい。タグなしフレームがGigabit Ethernet0/1インタフェースで受信された場合、SW1はどのように動作しますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "タグなしフレームは、VLAN1のトラフィックとして処理される",
        "タグなしフレームは、VLAN11のトラフィックとして処理される",
        "タグなしフレームは、VLAN6のトラフィックとして処理される",
        "タグなしフレームはドロップされる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0054.jpg",
      "answer_image": "page_0092.png",
      "has_diagram": true,
      "explanation": "トランクポートで受信したタグなしフレームは、Native VLAN(この場合VLAN6)のトラフィックとして処理されます。"
    },
    {
      "id": 101,
      "category": "VLAN 間のルーティング",
      "question": "図のVLAN間ルーティングについて正しい説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "RouterにはVLAN10とVLAN20インタフェースを作成しなければならない",
        "Routerを導入してもPC aとPC b間の通信は不可能である",
        "RouterのGi0/0とSwitch AのGi0/24のトランクのカプセル化タイプは合致していなければいけない",
        "PC aとPC bには同じデフォルトゲートウェイアドレスを設定する",
        "RouterとSwitch Aの接続ケーブルにはクロスオーバーケーブルを使用する",
        "RouterのGi0/0にはサブインタフェースを設定しなければならない"
      ],
      "correct_answers": [2, 5],
      "answer_count": 2,
      "question_image": "0055.jpg",
      "answer_image": "page_0093.png",
      "has_diagram": true,
      "explanation": "Router-on-a-Stick構成では、ルータとスイッチ間のトランクカプセル化タイプを一致させ、ルータに各VLAN用のサブインタフェースを作成する必要があります。"
    },
    {
      "id": 102,
      "category": "OSPFの概要",
      "question": "ルーティングプロトコルに関する正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ディスタンスベクタールーティングプロトコルはSPFアルゴリズムを使用する",
        "OSPFはリンクステートルーティングプロトコルである",
        "IS-ISはディスタンスベクタールーティングプロトコルである",
        "リンクステートルーティングプロトコルは宛先までのホップ数で経路を選択する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0055.jpg",
      "answer_image": "page_0094.png",
      "explanation": "OSPFはリンクステートルーティングプロトコルで、ネットワークトポロジ全体を把握してSPFアルゴリズムで最短経路を計算します。"
    },
    {
      "id": 103,
      "category": "OSPFの概要",
      "question": "このルータのルータIDとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1.1.1.1",
        "192.168.10.2",
        "192.168.20.1",
        "172.16.1.1"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0095.png",
      "has_diagram": true,
      "explanation": "OSPFのルータIDは、Loopbackインタフェースがある場合、その中で最も大きいIPアドレスが選択されます。この場合、Loopback0の1.1.1.1が選択されます。"
    },
    {
      "id": 104,
      "category": "OSPFの概要",
      "question": "OSPFルータIDコマンドを使用してルータを構成しました。しかしながら、依然として物理インタフェースのIPアドレスがルータIDとして使われています。この問題をネットワークへの影響がより小さい方法で修正するためには、どのアクションがふさわしいですか？次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルータの構成を保存する",
        "ループバックアドレスを指定する",
        "ルータを再起動する",
        "OSPFプロセスをリロードする"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0096.png",
      "explanation": "OSPFプロセスをリロード(clear ip ospf process)することで、ルータID変更を反映できます。これはルータ再起動よりも影響が小さい方法です。"
    },
    {
      "id": 105,
      "category": "OSPFの概要",
      "question": "OSPFにおいて、LoopbackインタフェースやDR的なルータIDの設定がされていない場合、ルータIDはどのように決定されますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "最も小さいIPアドレスにを加算した値がルータIDとなる",
        "ルータIDが設定されるまで、OSPFプロトコルは動作しない",
        "up/upしている物理インタフェースのうち、最も大きいアドレスがルータIDに選ばれる",
        "0.0.0.0がルータIDとなる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0056.jpg",
      "answer_image": "page_0096.png",
      "explanation": "Loopbackインタフェースがない場合、up/up状態の物理インタフェースの中で最も大きいIPアドレスがルータIDとして選択されます。"
    },
    {
      "id": 106,
      "category": "OSPFの概要",
      "question": "OSPFのネイバー構成について適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A① B① C② D② E① F該当なし",
        "A② B① C② D① E① F①",
        "A② B① C② D② E① F②",
        "A② B① C② D① E① F該当なし"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0057.jpg",
      "answer_image": "page_0097.png",
      "has_diagram": true,
      "explanation": "OSPFネイバー関係を形成するには、IPアドレス(②一致である)、タイマー(①一致する)、ルータID(②一意である)、エリアID(①一致する)、ネットマスク(①一致する)、プロセスID(①該当なし)が重要です。"
    },
    {
      "id": 107,
      "category": "OSPFの概要",
      "question": "R1とR2では、OSPFネイバーを形成できていません。ネイバーを形成させるためには、どうしたらいいですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "プライオリティを変更する",
        "ネットワークタイプを変更する",
        "Hello intervalを変更する",
        "プロセスIDを変更する"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0058.jpg",
      "answer_image": "page_0098.png",
      "has_diagram": true,
      "explanation": "R1のHello intervalは10秒、R2は20秒で不一致です。OSPFネイバーを形成するには、Hello intervalとDead intervalが一致している必要があります。"
    },
    {
      "id": 108,
      "category": "OSPFの概要",
      "question": "図のような構成を適用した後、2つのルータでOSPFネイバー関係を確立できません。原因として考えられるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "OSPFルータIDが一致していない",
        "R2はデフォルトのHelloタイマーを使用している",
        "R1のnetworkステートメントが正しく構成されていない",
        "OSPFのプロセスIDが一致していない"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0059.jpg",
      "answer_image": "page_0099.png",
      "has_diagram": true,
      "explanation": "R1のnetworkステートメントが正しく設定されていないため、OSPFがインタフェースで有効化されていません。"
    },
    {
      "id": 109,
      "category": "OSPFの概要",
      "question": "R1とR3の間にOSPFネイバー関係を構成する必要があります。認証が構成され、各ルータのインターフェイスは同じ192.168.1.0/30サブネットに接続されています。構成を完了するための次のステップとして適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "HelloタイマーとDeadタイマーを両側で一致するように設定する",
        "両方のインターフェイスでOSPFアクティブとして構成する",
        "各ルータのOSPFプロセスに同じプロセスIDを構成する",
        "各ルータのOSPFプロセスに同じルータIDを構成する",
        "両方のインターフェイスを同じエリアIDで構成する"
      ],
      "correct_answers": [1, 4],
      "answer_count": 2,
      "question_image": "0059.jpg",
      "answer_image": "page_0100.png",
      "explanation": "OSPFネイバーを形成するには、両方のインターフェイスでOSPFを有効化し、同じエリアIDを設定する必要があります。"
    },
    {
      "id": 110,
      "category": "OSPFの概要",
      "question": "OSPFがネットワークへの複数のパスを学習した場合、どのようにルートを選択しますか？適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "参照帯域幅を実際の帯域幅で除算した最小コストの合計",
        "K値に256を掛けて、最小メトリックのルートを計算",
        "ホップカウント",
        "インタフェースごとに、ソースルーターから宛先にメトリックを追加して、帯域幅が最小のルートを計算"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0101.png",
      "explanation": "OSPFは参照帯域幅を実際の帯域幅で除算してコストを計算し、最小コストの合計を持つパスを選択します。"
    },
    {
      "id": 111,
      "category": "OSPFの概要",
      "question": "R1をDRとして選択されるようにするには、どの設定が必要ですか。正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R1に固定のOSPFルータIDを設定する",
        "R1に、3つのルータの中で最も小さいOSPF優先度を設定する",
        "R2とR3を、R1のOSPFネイバーとして設定する",
        "R1のインターフェイスに最も大きいOSPFプライオリティ値を設定する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0101.png",
      "explanation": "DR選出では、最も高いOSPFプライオリティ値を持つルータが選択されます。プライオリティが同じ場合は、最も高いルータIDを持つルータが選択されます。"
    },
    {
      "id": 112,
      "category": "OSPFの概要",
      "question": "OSPF指定ルータとして構成しました。指定ルータが適切なモードであることを確認できる状態を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "初期化",
        "双方向",
        "FULL",
        "交換"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0060.jpg",
      "answer_image": "page_0102.png",
      "explanation": "OSPFネイバー状態がFULLになると、DRとの完全な隣接関係が確立され、LSDBが完全に同期されたことを示します。"
    },
    {
      "id": 113,
      "category": "OSPFの概要",
      "question": "図のような構成において、R4とR5がDR、BDRのいずれにも選出されないようにするために最も適切な設定コマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A",
        "D",
        "B",
        "C"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0061.jpg",
      "answer_image": "page_0103.png",
      "has_diagram": true,
      "explanation": "DR/BDR選出から除外するには、OSPFプライオリティを0に設定します。R4とR5で「ip ospf priority 120」と「ip ospf priority 110」を設定すると、これらのルータが優先的にDR/BDRに選出されます。"
    },
    {
      "id": 114,
      "category": "OSPFの概要",
      "question": "ルータのギガビットイーサネットのインタフェースでOSPFを有効化したときのOSPFネットワークタイプのデフォルトを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "非ブロードキャスト",
        "ブロードキャスト",
        "ポイントツーポイント",
        "ポイントツーマルチポイント"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0061.jpg",
      "answer_image": "page_0104.png",
      "explanation": "イーサネットインタフェースのOSPFネットワークタイプのデフォルトはブロードキャストです。"
    },
    {
      "id": 115,
      "category": "OSPFの概要",
      "question": "PPPプロトコルを有効化したインタフェースのOSPFのネットワークタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ポイントツーポイント",
        "ブロードキャスト",
        "非ブロードキャスト",
        "ポイントツーマルチポイント"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0062.jpg",
      "answer_image": "page_0104.png",
      "explanation": "PPPなどのポイントツーポイントリンクでは、OSPFネットワークタイプはポイントツーポイントになります。"
    },
    {
      "id": 116,
      "category": "OSPFの概要",
      "question": "R1とR2の間でOSPFを構成します。DR/BDRとして選択されないようにするためにR1で必要な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "D",
        "A",
        "C",
        "B"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0062.jpg",
      "answer_image": "page_0105.png",
      "has_diagram": true,
      "explanation": "ポイントツーポイントリンクではDR/BDRは不要です。ip ospf cost 0を設定することで、OSPFネットワークタイプをポイントツーポイントに変更し、DR/BDR選出を回避できます。"
    },
    {
      "id": 117,
      "category": "OSPFの概要",
      "question": "R2からインターネットにアクセスできません。修正するのに適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R2でRIPを有効にする",
        "R2でdefault-information originate alwaysを設定する",
        "R1でip route 0.0.0.0 0.0.0.0 1.1.1.1を設定する",
        "R1のインターネット側のインタフェースでOSPFを有効にする"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0063.jpg",
      "answer_image": "page_0106.png",
      "has_diagram": true,
      "explanation": "R1でdefault-information originate alwaysコマンドを使用すると、デフォルトルートをOSPFで配布できます。これによりR2はインターネットにアクセスできるようになります。"
    },
    {
      "id": 118,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "図のようなスイッチネットワークにおいて、ルートブリッジに選出されるスイッチはどれですか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "SWB",
        "SWA",
        "SWC",
        "SWD"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0107.png",
      "has_diagram": true,
      "explanation": "STPルートブリッジは最小のブリッジID(プライオリティ+MACアドレス)を持つスイッチが選出されます。SWAのプライオリティ(614440)が最も低いため、SWAがルートブリッジになります。"
    },
    {
      "id": 119,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "どのスイッチがSTPのルートブリッジに選出されますか、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "32769: 33-44-55-66-77-99",
        "32768: 11-22-33-44-55-66",
        "32768: 33-44-55-66-77-88",
        "32769: 11-22-33-44-55-55"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0107.png",
      "explanation": "最小のプライオリティ(32768)を持つスイッチの中で、最小のMACアドレス(11-22-33-44-55-66)を持つスイッチがルートブリッジになります。"
    },
    {
      "id": 120,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "PVST+とRPVST+の特徴として適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "PVST＋はCisco独自規格である",
        "RPVST+の方がPVST+よりコンバージェンスが速い",
        "PVST+は802.1sベース、RPVST+は802.1wベース",
        "PVST+は802.1sベース、RPVST+は802.1Dベース"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0064.jpg",
      "answer_image": "page_0108.png",
      "explanation": "RPVST+(Rapid Per-VLAN Spanning Tree Plus)は、PVST+よりも高速なコンバージェンスを提供します。PVST+は802.1Dベース、RPVST+は802.1wベースです。"
    },
    {
      "id": 121,
      "category": "冗長スイッチド トポロジの構築",
      "question": "図の構成で4台のスイッチでRSTPが動作しています。選択肢の中からRSTPのポートロールの正しい組み合わせを、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "スイッチD,Gi0/2,ルートポート",
        "スイッチB,Gi0/2,ルートポート",
        "スイッチA,Fa0/2,指定ポート",
        "スイッチC,Fa0/2,ルートポート",
        "スイッチA,Fa0/1,ルートポート",
        "スイッチB,Gi0/1,指定ポート"
      ],
      "correct_answers": [0, 2, 3],
      "answer_count": 3,
      "question_image": "0065.jpg",
      "answer_image": "page_0109.png",
      "has_diagram": true,
      "explanation": "図の構成ではプライオリティが設定されていないため、MACアドレスの値が最小のスイッチCがルートブリッジに選定されます。各スイッチのルートポートはルートブリッジへのパスコストが最小のポートとなり、各セグメントの指定ポートはパスコストが低いスイッチ側のポートとなります。"
    },
    {
      "id": 122,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "以下の表示結果についての正しい説明を、次の選択肢の中から2つ選びなさい。\n\nSW1# show spanning-tree vlan 30\n\nVLAN0030\n  Spanning tree enabled protocol rstp\n  Root ID  Priority    32798\n           Address    0022.be20.f480\n           Cost       19\n           Port       1 (FastEthernet2/1)\n           Hello Time 2 sec Max Age 20 sec Forward Delay 15 sec",
      "choices": [
        "ルートポートはFastEthernet 2/1である",
        "スパニングツリーモードはPVST+である",
        "指定ポートはFastEthernet 2/1である",
        "これはルートブリッジである",
        "スパニングツリーモードはRapid PVST+である"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0066.jpg",
      "answer_image": "page_0111.png",
      "has_diagram": true,
      "explanation": "表示結果からルートポートはFastEthernet 2/1であり、スパニングツリーモードはRapid PVST+(rstp)です。"
    },
    {
      "id": 123,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "RSTPにおいて収束している時のポートの状態を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "listening",
        "disabled",
        "discarding",
        "learning",
        "forwarding"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0066.jpg",
      "answer_image": "page_0112.png",
      "explanation": "RSTPにおいて収束している時のポートの状態は、discardingとforwardingです。RSTPではlistening状態とlearning状態は存在しません。"
    },
    {
      "id": 124,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "PortFastの説明として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "STP計算のコンバージェンスが削減される",
        "即座にフォワーディング状態になる",
        "スイッチ再起動後、すぐにフォワーティング状態になる",
        "BPDUが有効になる"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0066.jpg",
      "answer_image": "page_0112.png",
      "explanation": "PortFastは、エンドデバイスが接続されたポートで即座にフォワーディング状態に移行する機能です。"
    },
    {
      "id": 125,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "PortFastを実行しているインターフェイスでバイパスされるスパニングツリー状態はどれですか。次の選択肢の中から2つ選びなさい。",
      "choices": [
        "リスニング",
        "フォワーディング",
        "ラーニング",
        "ブロッキング",
        "無効"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0067.jpg",
      "answer_image": "page_0113.png",
      "explanation": "PortFastを実行しているインターフェイスは、リスニング状態とラーニング状態をバイパスします。"
    },
    {
      "id": 126,
      "category": "兄弟スイッチド トポロジの構築",
      "question": "追加設定を必要とせずにspanning-tree portfastコマンドをサポートしているポートタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセスポート",
        "レイヤ3インターフェース",
        "レイヤ3サブインターフェース",
        "トランクポート"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0067.jpg",
      "answer_image": "page_0113.png",
      "explanation": "spanning-tree portfastコマンドは、アクセスポートで追加設定なしに使用できます。"
    },
    {
      "id": 127,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "EtherChannelでネゴシエートプロトコルを使用せず構成する方法を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Passive",
        "Active",
        "on",
        "no negotiate"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0067.jpg",
      "answer_image": "page_0114.png",
      "explanation": "EtherChannelでネゴシエートプロトコルを使用せず構成するには、onモードを使用します。"
    },
    {
      "id": 128,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "ネットワーク管理者は、スイッチ間のレイヤ2接続をネゴシエーションさせて、4つのポートを論理的に1つのポートに束ねる必要があります。両端のスイッチでActiveモードを使用する場合、どのプロトコルを使用していますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "802.1q",
        "LLDP",
        "Cisco vPC",
        "LACP"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0068.jpg",
      "answer_image": "page_0114.png",
      "explanation": "スイッチ間のレイヤ2接続をネゴシエーションし、複数のポートを論理的に束ねるには、LACP(Link Aggregation Control Protocol)を使用します。Activeモードは、LACPのモードの1つです。"
    },
    {
      "id": 129,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "以下の出力結果からポートチャネル1の作成に使用されたコマンドとして正しいものを、次の選択肢の中から2つ選びなさい。\n\nSwitch# show etherchannel summary\n(出力を一部省略)\n\nGroup Port-channel Protocol Ports\n------+-------------+-----------+-------\n1     Po1(SU)      LACP      Gi0/1(P)  Gi0/2(P)\n2     Po2(SU)      LACP      Gi0/3(P)  Gi0/4(P)",
      "choices": [
        "C",
        "A",
        "B",
        "D",
        "E"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0068.jpg",
      "answer_image": "page_0115.png",
      "has_diagram": true,
      "explanation": "LACPのモードはActiveとpassiveです。PAgPのモードはdesirableとautoです。手動設定の場合はonです。正解は(2)(3)でAとBです。"
    },
    {
      "id": 130,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "SW1とSW2でイーサチャネルを構成します。SW1の設定が図のようになっている場合、SW2のコンフィグレーションとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0069.jpg",
      "answer_image": "page_0116.png",
      "has_diagram": true,
      "explanation": "SW1の設定がchannel-group 1 mode autoとなっている場合、SW2はchannel-group 1 mode passiveまたはdesirableに設定する必要があります。表示された選択肢Bが正解です。"
    },
    {
      "id": 131,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "図のような出力において、2つのスイッチ間のEtherChannelを確立させるために最も適した設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "LACPモードをactiveに変更する",
        "プロトコルのモードをonに変更する",
        "LACPモードをdesirableに変更する",
        "プロトコルをPAgPに変更しautoモードを使用する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0070.jpg",
      "answer_image": "page_0118.png",
      "has_diagram": true,
      "explanation": "両方のスイッチでchannel-group 1 mode passiveとなっているため、EtherChannelが確立されません。一方または両方をactiveに変更する必要があります。"
    },
    {
      "id": 132,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "S1とS2が接続されています。PAgPを使用してEtherChannelを構成する時に適切な設定を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "S1に channel-group 1 mode autoコマンドを設定する",
        "S2にchannel-group 1 mode autoコマンドを設定する",
        "S1にchannel-group 1 mode passiveコマンドを設定する",
        "S1にchannel-group 1 mode activeコマンドを設定する",
        "S2にchannel-group 1 mode desirableコマンドを設定する"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0070.jpg",
      "answer_image": "page_0119.png",
      "explanation": "PAgPでEtherChannelを構成する場合、一方をdesirableに、もう一方をautoまたはdesirableに設定します。"
    },
    {
      "id": 133,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "以下の出力結果から、EtherChannelを構成できない原因として考えられるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "MTUサイズが異なる",
        "Fa0/23が管理的にシャットダウンされている",
        "カプセル化タイプが異なる",
        "Fa0/23のspeedが異なる"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0071.jpg",
      "answer_image": "page_0120.png",
      "has_diagram": true,
      "explanation": "SW1のFa0/23は管理的にシャットダウンされており、ライン プロトコルがダウンしています。このため、EtherChannelを構成できません。"
    },
    {
      "id": 134,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "switch1のLACPのモードとして適切なものを、次の選択肢の中から1つ選択しなさい。",
      "choices": [
        "passive",
        "active",
        "on",
        "desirable"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0072.jpg",
      "answer_image": "page_0121.png",
      "has_diagram": true,
      "explanation": "show lacp neighborコマンドの出力で、Flagsに「SP」が表示されている場合、デバイスはpassiveモードです。"
    },
    {
      "id": 135,
      "category": "EtherChannelによる兄弟スイッチド トポロジの改善",
      "question": "オープン標準プロトコルを使用してレイヤ3EtherChannelを確立するための設定として適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "E",
        "C",
        "A",
        "B",
        "D"
      ],
      "correct_answers": [1, 4],
      "answer_count": 2,
      "question_image": "0073.jpg",
      "answer_image": "page_0122.png",
      "has_diagram": true,
      "explanation": "オープン標準プロトコルはLACPです。レイヤ3EtherChannelを構成するには、interface GigabitEthernet0/1でchannel-group 10 mode activeまたはpassiveを設定し、no switchportコマンドを実行します。"
    },
    {
      "id": 136,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "FHRPの利点として適切な説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "デフォルトゲートウェイの自動フェイルオーバーを有効にする",
        "暗号化されたトラフィックを許可する",
        "レイヤ2レベルの冗長性を提供する",
        "複数のデバイスがネットワーク内のクライアントの単一の仮想ゲートウェイとして機能することを許可する",
        "複数のポートをバンドルして帯域幅を増やすことができる"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0073.jpg",
      "answer_image": "page_0123.png",
      "explanation": "FHRP(First Hop Redundancy Protocol)は、デフォルトゲートウェイの自動フェイルオーバーを有効にし、複数のデバイスがネットワーク内のクライアントの単一の仮想ゲートウェイとして機能することを許可します。"
    },
    {
      "id": 137,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "ファーストホップ冗長プロトコルを実装する目的として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "複数のスイッチを1つのユニットとして動作させる",
        "ネットワークループを防ぐ",
        "デフォルトゲートウェイの障害から保護する",
        "マルチリンクセグメントに負荷分散を提供する"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0074.jpg",
      "answer_image": "page_0123.png",
      "explanation": "ファーストホップ冗長プロトコルの主な目的は、デフォルトゲートウェイの障害から保護することです。"
    },
    {
      "id": 138,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "HSRPグループ内のアクティブルータがダウンした場合、どのルータがパケット転送の役割を引き継ぎますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "リスニング",
        "バックアップ",
        "フォワーディング",
        "スタンバイ"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0074.jpg",
      "answer_image": "page_0124.png",
      "explanation": "HSRPグループ内のアクティブルータがダウンした場合、スタンバイルータがパケット転送の役割を引き継ぎます。"
    },
    {
      "id": 139,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "HSRPでプライオリティが高い方がActiveになる機能を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "プライオリティ",
        "プリエンプション",
        "トラッキング",
        "authentication"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0074.jpg",
      "answer_image": "page_0124.png",
      "explanation": "HSRPでプライオリティが高い方がActiveになる機能はプリエンプションです。"
    },
    {
      "id": 140,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "HSRPの正しい説明を、次の選択肢の中から3つ選びなさい。",
      "choices": [
        "HSRP仮想IPアドレスは、実ルータのアドレスと異なるサブネットから割り振る",
        "仮想IPアドレス、仮想MACアドレスあでのトラフィックは、HSRPのマスタールータのみで転送処理する",
        "HSRPではインタフェースごとにグループ番号0～255までのグループを作成し、ロードバランシグさせることができる",
        "HSRPのデフォルトのHelloインターバルは3秒、Deadインターバルは10秒である",
        "HSRPでは、クリアテキスト認証のみサポートしている",
        "HSRP仮想IPアドレスには、実ルータのインタフェースと同じアドレスを割り振る"
      ],
      "correct_answers": [2, 3, 5],
      "answer_count": 3,
      "question_image": "0075.jpg",
      "answer_image": "page_0125.png",
      "explanation": "HSRPではインタフェースごとにグループ番号0～255までのグループを作成でき、デフォルトのHelloインターバルは3秒、Deadインターバルは10秒です。HSRP仮想IPアドレスには、実ルータのインタフェースと同じアドレスを割り振ることができます。"
    },
    {
      "id": 141,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "HSRPの適切な動作を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "2台のルータは、一方をアクティブ、もう一方をスタンバイとする",
        "2台のルータは、LAN上のデバイスのデフォルトゲートウェイとして使用される仮想IP アドレスを共有する",
        "各ルータには異なるIPアドレスがあり、両方のルータはLAN上のデフォルトゲートウェイとして機能し、トラフィックはそれらの間で負荷分散される",
        "2台のルータは構成を同期して、一貫したパケット転送を提供する",
        "2台のルータは同じIPアドレスを共有し、デフォルトゲートウェイトラフィックはそれらの間で負荷分散される"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0075.jpg",
      "answer_image": "page_0126.png",
      "explanation": "HSRPでは、2台のルータは一方をアクティブ、もう一方をスタンバイとし、LAN上のデバイスのデフォルトゲートウェイとして使用される仮想IPアドレスを共有します。"
    },
    {
      "id": 142,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "HSRPグループ内のルータの優先度を確認するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show sessions",
        "show hsrp",
        "show standby",
        "show interfaces"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0075.jpg",
      "answer_image": "page_0127.png",
      "explanation": "HSRPグループ内のルータの優先度を確認するコマンドは show standby です。"
    },
    {
      "id": 143,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "VRRPの説明として正しいものはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "2台以上のルータを使用して、デフォルトゲートウェイの冗長化を提供する",
        "ネイバー間でルーティングテーブルの情報を共有できる",
        "ルートブリッジにすべてのトラフィックを転送することで、レイヤ2LANでのループを防止する",
        "送信元から2ホップ以上の宛先に対して、トラフィックを負荷分散させる"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0076.jpg",
      "answer_image": "page_0128.png",
      "explanation": "VRRP(Virtual Router Redundancy Protocol)は、2台以上のルータを使用して、デフォルトゲートウェイの冗長化を提供するプロトコルです。"
    },
    {
      "id": 144,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "VRRPの仮想MACアドレスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "0005.3711.0975",
        "0000.5E00.010a",
        "0000.0C07.AC99",
        "0007.C070.AB01"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0076.jpg",
      "answer_image": "page_0128.png",
      "explanation": "VRRPの仮想MACアドレスは 0000.5E00.01XX の形式です(XXはVRRPグループ番号)。"
    },
    {
      "id": 145,
      "category": "レイヤ 3 の冗長性の調査",
      "question": "必要な設定量を最小化し、アップリンクの帯域使用率を最大化することができるFHRPを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "VRRP",
        "HSRPv1",
        "HSRPv2",
        "GLBP"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0076.jpg",
      "answer_image": "page_0129.png",
      "explanation": "GLBP(Gateway Load Balancing Protocol)は、必要な設定量を最小化し、アップリンクの帯域使用率を最大化できるFHRPです。"
    },
    {
      "id": 146,
      "category": "WAN テクノロジーの概要",
      "question": "シンプルな品質と可用性を提供するWANトポロジはどれですか。最も適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "フルメッシュ",
        "パーシャルメッシュ",
        "ポイントツーポイント",
        "ハブアンドスポーク"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0076.jpg",
      "answer_image": "page_0130.png",
      "explanation": "ポイントツーポイントトポロジは、シンプルな品質と可用性を提供するWANトポロジです。"
    },
    {
      "id": 147,
      "category": "WAN テクノロジーの概要",
      "question": "WANの専用線についての適切な説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "敷設・保守を電気通信事業者が行うので、顧客の技術的負担が私設網より小さい",
        "コストが安価",
        "ルータのインタフェースで複数の専用回線をシェアできる",
        "十分な帯域幅を提供する",
        "T1回線のみサポートする"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0077.jpg",
      "answer_image": "page_0130.png",
      "explanation": "WANの専用線は、敷設・保守を電気通信事業者が行うので顧客の技術的負担が私設網より小さく、十分な帯域幅を提供します。"
    },
    {
      "id": 148,
      "category": "WAN テクノロジーの概要",
      "question": "サイト間VPNを使用する場合、ユーザデータの転送を担当するプロトコルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "MD5",
        "IKEv1",
        "IKEv2",
        "IPSec"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0077.jpg",
      "answer_image": "page_0131.png",
      "explanation": "サイト間VPNを使用する場合、ユーザデータの転送を担当するプロトコルはIPSecです。"
    },
    {
      "id": 149,
      "category": "WAN テクノロジーの概要",
      "question": "IPSecで送信されるパケットとして最も一般的なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "あるリモートサイト上のスイッチが MACアドレスを見つけるために送信するブロードキャスト",
        "本社のサーバーにヘリモート サイトのホストから送られるユニキャストメッセージ",
        "あるサイトのサーバーから別の場所のホストへのマルチキャストトラフィック",
        "2つの異なるサイトにあるスイッチ間のスパニングツリーの更新"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0077.jpg",
      "answer_image": "page_0131.png",
      "explanation": "IPSecで送信される最も一般的なパケットは、本社のサーバーにヘリモートサイトのホストから送られるユニキャストメッセージです。"
    },
    {
      "id": 150,
      "category": "WAN テクノロジーの概要",
      "question": "リモートサイト間でマルチキャストトラフィックを伝送し、暗号化をサポートするメカニズムとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "GRE",
        "ISATAP",
        "IPsec over ISATAP",
        "GRE over IPsec"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0077.jpg",
      "answer_image": "page_0132.png",
      "explanation": "リモートサイト間でマルチキャストトラフィックを伝送し、暗号化をサポートするメカニズムは GRE over IPsec です。"
    },
    {
      "id": 151,
      "category": "WAN テクノロジーの概要",
      "question": "DMVPNのトポロジを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "パーシャルメッシュ",
        "リング",
        "ハブアンドスポーク",
        "フルメッシュ"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0078.jpg",
      "answer_image": "page_0132.png",
      "explanation": "DMVPN(Dynamic Multipoint VPN)のトポロジは、ハブアンドスポーク型です。"
    },
    {
      "id": 152,
      "category": "ACLの基本",
      "question": "標準ACLと拡張ACLの違いについて正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "①B D  ②A C  ③E F",
        "①A B  ②C D  ③E F",
        "①A C  ②B D  ③E F",
        "①A E  ②B F  ③C D"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0078.jpg",
      "answer_image": "page_0133.png",
      "has_diagram": true,
      "explanation": "標準ACLは1-99または1300-1999の番号を使用し、送信元アドレスのみで制御します。拡張ACLは100-199または2000-2699の番号を使用し、送信元・宛先アドレスとプロトコルで制御します。"
    },
    {
      "id": 153,
      "category": "ACLの基本",
      "question": "正しい拡張IPアクセスコントロールリストを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "access-list 50 permit tcp any host 192.168.1.1",
        "access-list 150 permit tcp any host 192.168.1.1",
        "access-list 150 permit host 192.168.1.1",
        "access-list 50 permit host 192.168.1.1"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0078.jpg",
      "answer_image": "page_0134.png",
      "explanation": "拡張ACLは100-199の番号を使用し、プロトコル、送信元、宛先を指定します。正しい構文は access-list 150 permit tcp any host 192.168.1.1 です。"
    },
    {
      "id": 154,
      "category": "ACLの基本",
      "question": "図の構成で、SwitchBからRouterAへのPingとTelnetが失敗します。Telnet は拒否したまま、Pingのみ成功させるためにRouterAに必要な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "fa0/1に設定されているip access-groupコマンドの適用をインバウンドからアウトバウンドに変更する",
        "fa0/1に適用されているaccess-list 101を外しaccess-list 102を適用する",
        "fa0/0にIPアドレスを設定する",
        "fa0/1に適用されているaccess-list 101を外しaccess-list 103を適用する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0079.jpg",
      "answer_image": "page_0135.png",
      "has_diagram": true,
      "explanation": "現在のaccess-list 101はICMPとTelnetの両方を拒否しています。Pingのみ成功させるには、ICMPを許可し、Telnetを拒否するaccess-list 102を適用する必要があります。"
    },
    {
      "id": 155,
      "category": "ACLの基本",
      "question": "VLAN 20からWebサーバへのアクセスをブロックし、その他の通信は許可する必要があります。スイッチに適用する場合、適切なコマンドを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0080.jpg",
      "answer_image": "page_0136.png",
      "has_diagram": true,
      "explanation": "VLAN 20(192.168.20.0/24)からWebサーバ(10.10.10.2/24)へのアクセスをブロックし、その他を許可するには、deny tcp host 10.10.10.2 eq 80とpermit ip any anyの順で設定します。"
    },
    {
      "id": 156,
      "category": "ACLの基本",
      "question": "ホストBからホストAに対する通信のうち、port 25と80の通信のみをブロックしたいが適切に動作しません。修正する場合に適切なものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "送信元と宛先を交換する",
        "ACLの末尾にpermit ip any any を追加する",
        "outboundで設定する",
        "R1で構成する",
        "ACLの先頭にpermit anyを追加する"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0081.jpg",
      "answer_image": "page_0137.png",
      "has_diagram": true,
      "explanation": "ACLの末尾には暗黙のdeny anyがあるため、明示的にpermit ip any anyを追加する必要があります。また、R2のfa0/1にoutboundで適用する必要があります。"
    },
    {
      "id": 157,
      "category": "ACLの基本",
      "question": "PC-1からRTR1へのTelnetセッションを拒否して、他のホストからはRTR1へTelnetできるようにアクセスリストを設定しています。しかし、PC-2からRTR1へTelnetできません。どのように設定を修正しますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "line vty 0 4のaccess-class 10 in を削除する",
        "Gi0/0にip access-group 10 outを追加する",
        "line vty 0 4のパスワードを削除する",
        "access-list 10 permit anyを追加する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0082.jpg",
      "answer_image": "page_0138.png",
      "has_diagram": true,
      "explanation": "ACLには暗黙のdeny anyがあるため、PC-1以外のホストからTelnetできるようにするには、access-list 10 permit anyを追加する必要があります。"
    },
    {
      "id": 158,
      "category": "ACLの基本",
      "question": "ルータに図のようなACLが設定されています。ネットワーク管理者は追加でセキュアなVTYアクセスができるようにACLの設定を追加します。どのコマンドが適切ですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "access-list 101 permit tcp 20.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq ssh",
        "access-list 101 permit tcp 20.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq scp",
        "access-list 101 permit tcp 20.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq https",
        "access-list 101 permit tcp 20.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq telnet"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0083.jpg",
      "answer_image": "page_0139.png",
      "has_diagram": true,
      "explanation": "セキュアなVTYアクセスのためにはtelnetを許可するACLエントリを追加します。正解は access-list 101 permit tcp 20.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq telnet です。"
    },
    {
      "id": 159,
      "category": "ACLの基本",
      "question": "IPv4ACLをインターフェイスに適用していますが、インターフェイス上のすべての着信パケットが許可されてしまっています。このような動作の原因として考えられるものを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "一致する許可ステートメントの条件が必要以上に広く定義されている",
        "空のACLが設定されている",
        "パケットはどの許可ステートメントにも一致していない",
        "一致する許可ステートメントが他の条件より先に評価されている",
        "一致する拒否ステートメントが他の条件より先に評価されている"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0083.jpg",
      "answer_image": "page_0140.png",
      "explanation": "すべての着信パケットが許可される原因として、一致する許可ステートメントの条件が必要以上に広く定義されているか、一致する許可ステートメントが他の条件より先に評価されていることが考えられます。"
    },
    {
      "id": 160,
      "category": "インターネット接続の有効化",
      "question": "インターネットインタフェースとみなされるNAT設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "グローバル",
        "ローカル",
        "内部",
        "外部"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0084.jpg",
      "answer_image": "page_0140.png",
      "explanation": "インターネットインタフェースとみなされるNAT設定は「外部」(outside)です。"
    },
    {
      "id": 161,
      "category": "インターネット接続の有効化",
      "question": "NATの設定の際、インターネット接続インタフェースに指定するコマンドを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "local",
        "inside",
        "outside",
        "global"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0084.jpg",
      "answer_image": "page_0141.png",
      "explanation": "NATの設定の際、インターネット接続インタフェースに指定するコマンドは ip nat outside です。"
    },
    {
      "id": 162,
      "category": "インターネット接続の有効化",
      "question": "1対1で内部アドレスと外部アドレスをマッピングするNATのタイプを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "PAT",
        "NATオーバーロード",
        "スタティックNAT",
        "ダイナミックNAT"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0084.jpg",
      "answer_image": "page_0141.png",
      "explanation": "1対1で内部アドレスと外部アドレスをマッピングするNATのタイプはスタティックNATです。"
    },
    {
      "id": 163,
      "category": "インターネット接続の有効化",
      "question": "エンジニアであるあなたは、172.16.1.0/24からのパケットの送信元IPアドレスを、200.1.1.1、200.1.1.2、200.1.1.3の3つのいずれかのアドレスに変換して送信できるようなNATの設定をすることになりました。NATの設定として正しいものはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "A",
        "C",
        "D"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0085.jpg",
      "answer_image": "page_0142.png",
      "has_diagram": true,
      "explanation": "ダイナミックNATを設定する場合、ip nat pool mypool 200.1.1.1 200.1.1.3 prefix-length 30とaccess-list 1 permit 172.16.1.0 0.0.0.255、そしてip nat inside source list 1 pool mypoolを設定します。"
    },
    {
      "id": 164,
      "category": "インターネット接続の有効化",
      "question": "CiscoルータにPATを設定しました。プライベートアドレスを設定した内部ホストがインターネットへ通信する際の動作について正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルータは参照テーブルに登録されているホストからのアクセスがあった場合、参照テーブルに従い送信元アドレスと宛先アドレスを変換して転送する",
        "ルータは複数ユーザからのアクセスの際、送信元アドレスを同じアドレスに変換するが、送信元のポート番号をそれぞれのコネクション毎に変えて転送する",
        "ルータは複数の高いコンピュータからアクセスがあった時はは送信元のアドレスを明示的に設定されているアドレスに変換して転送する",
        "ルータはプールで登録されているアドレス数分だけアドレス変換し転送する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0085.jpg",
      "answer_image": "page_0143.png",
      "explanation": "PAT(Port Address Translation)では、ルータは複数ユーザからのアクセスの際、送信元アドレスを同じアドレスに変換するが、送信元のポート番号をそれぞれのコネクション毎に変えて転送します。"
    },
    {
      "id": 165,
      "category": "インターネット接続の有効化",
      "question": "ネットワークエンジニアがインターネットアクセスのためNATを設定しました。図を参照して変換後の送信元のIPアドレスとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "123.1.1.1",
        "172.16.1.1",
        "200.1.1.1",
        "172.16.1.2"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0086.jpg",
      "answer_image": "page_0144.png",
      "has_diagram": true,
      "explanation": "show ip nat translationsの出力から、Inside localの172.16.1.1がInside globalの200.1.1.1に変換されていることがわかります。"
    },
    {
      "id": 166,
      "category": "インターネット接続の有効化",
      "question": "NATにおいて、アドレス変換の回数を確認するコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "show ip protocols",
        "show ip nat statistics",
        "show ip nat translations",
        "show ip route"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0086.jpg",
      "answer_image": "page_0145.png",
      "explanation": "NATのアドレス変換の回数などの統計情報を確認するコマンドは show ip nat statistics です。"
    },
    {
      "id": 167,
      "category": "インターネット接続の有効化",
      "question": "図の出力結果に示されている部分的なNAT設定を完了するために必要なステップを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "NAT外部インターフェイスを設定する",
        "NATプールと重複するスタティックNATエントリを再構成する",
        "ACLを変更する",
        "ACLをNATプールに適用する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0087.jpg",
      "answer_image": "page_0146.png",
      "has_diagram": true,
      "explanation": "show ip nat statisticsの出力を見ると、Total active translations: 0 (0 static, 0 dynamic, 0 extended)となっており、ACLをNATプールに適用する設定が不足しています。"
    },
    {
      "id": 168,
      "category": "QoS の概要",
      "question": "QoSは音声トラフィックをどのように最適化しますか。適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "音声トラフィックとビデオトラフィックを区別する",
        "帯域幅の使用量を削減する",
        "パケット損失を減らす",
        "ジッターを増やす"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0087.jpg",
      "answer_image": "page_0147.png",
      "explanation": "QoSは、音声トラフィックを優先的に扱うことで、パケット損失を減らします。"
    },
    {
      "id": 169,
      "category": "QoS の概要",
      "question": "トラフィックシェービングの目的として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "動的フロー識別を有効にする",
        "ポリシーベースルーティングを有効にする",
        "ベストエフォート型のサービスを提供する",
        "帯域幅の使用を制限する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0088.jpg",
      "answer_image": "page_0148.png",
      "explanation": "トラフィックシェービングの目的は、帯域幅の使用を制限することです。"
    },
    {
      "id": 170,
      "category": "QoS の概要",
      "question": "輻輳管理を提供するQoSツールについて、適切なものを次の選択肢の中から2つ選びなさい。",
      "choices": [
        "PQ",
        "FRTS",
        "PBR",
        "CAR",
        "CBWFQ"
      ],
      "correct_answers": [0, 4],
      "answer_count": 2,
      "question_image": "0088.jpg",
      "answer_image": "page_0148.png",
      "explanation": "輻輳管理を提供するQoSツールは、PQ(Priority Queuing)とCBWFQ(Class-Based Weighted Fair Queuing)です。"
    },
    {
      "id": 171,
      "category": "QoS の概要",
      "question": "ネットワーク上の音声トラフィックを最適化するために使用されるQoSツールはどれですか。適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "WFQ",
        "FIFO",
        "PQ",
        "WRED"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0088.jpg",
      "answer_image": "page_0149.png",
      "explanation": "ネットワーク上の音声トラフィックを最適化するために使用されるQoSツールは、PQ(Priority Queuing)です。"
    },
    {
      "id": 172,
      "category": "QoS の概要",
      "question": "インタラクティブな音声とビデオに適したQoSサービスはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "トラフィックポリシング",
        "expedited forwarding",
        "低遅延キューイング",
        "ラウンドロビンスケジューリング"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0088.jpg",
      "answer_image": "page_0149.png",
      "explanation": "インタラクティブな音声とビデオに適したQoSサービスは、expedited forwarding(EF)です。"
    },
    {
      "id": 173,
      "category": "QoS の概要",
      "question": "重み付けランダム早期検出メカニズムの適切な説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "キューがいっぱいになるのを防ぐことで輻輳を緩和",
        "優先度の高いパケットの配信を保証",
        "精密なパケット判別を行う",
        "低プライオリティのパケットを破棄し、高プライオリティパケットを保護する"
      ],
      "correct_answers": [0, 3],
      "answer_count": 2,
      "question_image": "0089.jpg",
      "answer_image": "page_0150.png",
      "explanation": "WRED(Weighted Random Early Detection)は、キューがいっぱいになるのを防ぐことで輻輳を緩和し、低プライオリティのパケットを破棄し、高プライオリティパケットを保護します。"
    },
    {
      "id": 174,
      "category": "ワイヤレスの基礎",
      "question": "Wireless LAN Controllerを使用するメリットとして適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセスポイントに割り当てるIPアドレスが1つで済む",
        "Autonomous AP管理には、より複雑な構成が必要",
        "各アクセスポイントを個別に設定する必要がなくなる",
        "AutonomousおよびLightweight APをサポートする"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0089.jpg",
      "answer_image": "page_0150.png",
      "explanation": "Wireless LAN Controllerを使用するメリットは、各アクセスポイントを個別に設定する必要がなくなることです。"
    },
    {
      "id": 175,
      "category": "ワイヤレスの基礎",
      "question": "Wireless LAN Controllerで管理することができるものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Autonomous AP",
        "LightWeight AP",
        "ブリッジ",
        "モビリティ"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0089.jpg",
      "answer_image": "page_0151.png",
      "explanation": "Wireless LAN Controllerで管理することができるのは、LightWeight AP(Lightweight Access Point)です。"
    },
    {
      "id": 176,
      "category": "ワイヤレスの基礎",
      "question": "Lightweightアクセスポイントを利用してネットワークに接続しているとき、ユーザの認証要求を制御するデバイスはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TACACSサーバ",
        "Wireless LANコントローラ",
        "Lightweightアクセスポイント",
        "RADIUSサーバ"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0089.jpg",
      "answer_image": "page_0151.png",
      "explanation": "Lightweightアクセスポイントを利用してネットワークに接続しているとき、ユーザの認証要求を制御するデバイスはWireless LANコントローラです。"
    },
    {
      "id": 177,
      "category": "ワイヤレスの基礎",
      "question": "Wireless LAN Controllerへの接続が失われた後でも引き続きワイヤレスクライアントにサービスを提供するアクセスポイントモードを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "フレックスコネクト",
        "スニファー",
        "メッシュ",
        "ローカル"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0090.jpg",
      "answer_image": "page_0152.png",
      "explanation": "Wireless LAN Controllerへの接続が失われた後でも引き続きワイヤレスクライアントにサービスを提供するアクセスポイントモードは、フレックスコネクトです。"
    },
    {
      "id": 178,
      "category": "ワイヤレスの基礎",
      "question": "アクセスポイントのローカルモードとFlexConnectモードの違いに関する説明として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ローカルモードは、APごとにWLCへ2つのCAPWAPトンネルを作成する",
        "APがWLCへの接続を失うと、FlexConnectモードが機能しなくなる",
        "ローカルスイッチングが設定されている場合、FlexConnectモードはAPからWLCにトラフィックを送信する",
        "ローカルモードでは、APは自律型APであるかのように動作する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0090.jpg",
      "answer_image": "page_0153.png",
      "explanation": "ローカルモードは、APごとにWLCへ2つのCAPWAPトンネルを作成します。1つは制御用、もう1つはデータ用です。"
    },
    {
      "id": 179,
      "category": "ワイヤレスの基礎",
      "question": "ローカルモードで動作するAPとWLCの間では、CAPWAPはどのように動作しますか。適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "APIは、WLCと同じスイッチに接続しなければならない",
        "APIは、銅ケーブルを使用してWLCに直接接続する必要がある",
        "ループが発生するため、APを有線LANにつないではいけない",
        "APIは、WLCへの接続を前提としてネットワーク内の任意のスイッチに接続できる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0090.jpg",
      "answer_image": "page_0154.png",
      "explanation": "ローカルモードで動作するAPとWLCの間では、CAPWAPを使用します。APIは、WLCへの接続を前提としてネットワーク内の任意のスイッチに接続できます。"
    },
    {
      "id": 180,
      "category": "ワイヤレスの基礎",
      "question": "802.11ワイヤレス規格の種類と説明について、正しい組み合わせを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A=① B=③ C=⑤ D=④ E=②",
        "A=④ B=② C=① D=③ E=⑤",
        "A=② B=① C=③ D=⑤ E=④",
        "A=⑤ B=④ C=② D=① E=③"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0091.jpg",
      "answer_image": "page_0155.png",
      "has_diagram": true,
      "explanation": "802.11aは2.4GHzと5GHzの周波数帯で機能する、802.11bは最大54Mbpsのレートで2.4GHzの周波数帯でのみ機能する、802.11gは100Mbps以上のレートで5GHzの周波数帯でのみ機能する、802.11nは最大11Mbpsのレートで動作する、802.11acは最大54Mbpsのレートで5GHzの周波数帯でのみ機能する、という組み合わせです。"
    },
    {
      "id": 181,
      "category": "ワイヤレスの基礎",
      "question": "Lightweight APがWLCに接続する際に使用するプロトコルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "CAPWAP",
        "SNMP",
        "LWAPP",
        "LAP"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0092.jpg",
      "answer_image": "page_0156.png",
      "explanation": "Lightweight APがWLCに接続する際に使用するプロトコルは、CAPWAP(Control And Provisioning of Wireless Access Points)です。"
    },
    {
      "id": 182,
      "category": "ワイヤレスの基礎",
      "question": "直接シーケンススペクトラム拡散を使用して、コリジョンを制限するために使用される3つの2.4 GHzチャネルはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "5、6、7",
        "1、5、10",
        "1、2、3",
        "1、6、11"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0092.jpg",
      "answer_image": "page_0156.png",
      "explanation": "直接シーケンススペクトラム拡散を使用して、コリジョンを制限するために使用される3つの2.4 GHzチャネルは、1、6、11です。これらは重複しない3つのチャネルです。"
    },
    {
      "id": 183,
      "category": "ワイヤレスの基礎",
      "question": "Wi-Fiチャネルの重複が発生した場合に考えられる事象について、適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ワイヤレスデバイスは異なるSSIDを区別できなくなる",
        "ワイヤレスネットワークは不正アクセスに対して脆弱になる",
        "ユーザーのワイヤレスネットワークのパフォーマンスが低下する",
        "盗聴の被害を受けやすくなる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0092.jpg",
      "answer_image": "page_0157.png",
      "explanation": "Wi-Fiチャネルの重複が発生した場合、ユーザーのワイヤレスネットワークのパフォーマンスが低下します。"
    },
    {
      "id": 184,
      "category": "ワイヤレスの基礎",
      "question": "WLANコントローラのService interfaceの説明として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "管理者によって手動で設定されるVLANインターフェイスである",
        "Web認証のゲートウェイIPとして利用するインターフェイスである",
        "コントローラに管理アクセスするための物理インターフェイスである",
        "コントローラ自体の管理を行うためのインターフェイスである"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0092.jpg",
      "answer_image": "page_0158.png",
      "explanation": "WLANコントローラのService interfaceは、管理者によって手動で設定されるVLANインターフェイスです。"
    },
    {
      "id": 185,
      "category": "ワイヤレスの基礎",
      "question": "通常のアクセスポイントトラフィックを通過させる際、スイッチと接続されるWLCのポートはどれですか。適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "redundancy",
        "distribution system",
        "console",
        "service"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0092.jpg",
      "answer_image": "page_0159.png",
      "explanation": "通常のアクセスポイントトラフィックを通過させる際、スイッチと接続されるWLCのポートは、serviceポートです。"
    },
    {
      "id": 186,
      "category": "ワイヤレスの基礎",
      "question": "Wireless LAN Controller で新しいWLANを設定するときに入力する必要がある項目を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "管理インタフェース",
        "最低1台のAPのアドレス",
        "SSID",
        "QoS",
        "プロファイル名"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0093.jpg",
      "answer_image": "page_0160.png",
      "explanation": "Wireless LAN Controller で新しいWLANを設定するときに入力する必要がある項目は、SSIDとプロファイル名です。"
    },
    {
      "id": 187,
      "category": "ワイヤレスの基礎",
      "question": "WLANの各用語について適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A④ B③ C⑤ D② E①",
        "A① B③ C⑤ D② E④",
        "A② B③ C⑤ D④ E①",
        "A④ B③ C② D⑤ E①"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0093.jpg",
      "answer_image": "page_0161.png",
      "has_diagram": true,
      "explanation": "WLANの各コンポーネントと用語の正しい組み合わせは、アクセスポイント-AP管理、仮想インタフェース-管理専用ポート、ダイナミックインタフェース-モビリティ機能を提供、サービスポート-WiFiデバイスに有線ネットワークの接続を提供、Wireless LAN Controller-SSIDとVLANのマッピング、という組み合わせです。"
    },
    {
      "id": 188,
      "category": "ワイヤレスの基礎",
      "question": "サービスポートインターフェイスでサポートされているプロトコルを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "Telnet",
        "TACACS+",
        "RADIUS",
        "SSH",
        "SCP"
      ],
      "correct_answers": [3, 4],
      "answer_count": 2,
      "question_image": "0094.jpg",
      "answer_image": "page_0162.png",
      "explanation": "サービスポートインターフェイスでサポートされているプロトコルは、SSHとSCPです。"
    },
    {
      "id": 189,
      "category": "アーキテクチャと仮想化の概要",
      "question": "3層ネットワークアーキテクチャのディストリビューションレイヤーの特徴について、適切なものを次の選択肢の中から2つ選びなさい。",
      "choices": [
        "LANプリンターの物理接続ポイントである",
        "レイヤー2とレイヤー3の通信境界を提供する",
        "ネットワーク集約ポイントとして機能する",
        "ネットワークトポロジのバックボーンである",
        "冗長かつ継続的な稼働時間を満たすように設計されている"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0094.jpg",
      "answer_image": "page_0162.png",
      "explanation": "3層ネットワークアーキテクチャのディストリビューションレイヤーの特徴は、レイヤー2とレイヤー3の通信境界を提供し、ネットワーク集約ポイントとして機能することです。"
    },
    {
      "id": 190,
      "category": "アーキテクチャと仮想化の概要",
      "question": "3層モデルネットワークに接続されたクライアント間で通信が通るパスとして、適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセス – ディストリビューション – コア – ディストリビューション – アクセス",
        "アクセス – コア – ディストリビューション – アクセス",
        "アクセス – ディストリビューション – ディストリビューション – アクセス",
        "アクセス – コア – アクセス"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0094.jpg",
      "answer_image": "page_0163.png",
      "explanation": "3層モデルネットワークに接続されたクライアント間で通信が通るパスは、アクセス – ディストリビューション – コア – ディストリビューション – アクセス です。"
    },
    {
      "id": 191,
      "category": "アーキテクチャと仮想化の概要",
      "question": "スパインリーフトポロジのスイッチはどのように相互接続されていますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "各リーフスイッチは中央のリーフスイッチに接続され、コアスパインスイッチにアップリンクされる",
        "各リーフスイッチは、いずれかのスパインスイッチに接続される",
        "各リーフスイッチは、2つのスパインスイッチに接続され、ループを形成する",
        "各リーフスイッチは、各スパインスイッチに接続される"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0095.jpg",
      "answer_image": "page_0163.png",
      "explanation": "スパインリーフトポロジのスイッチは、各リーフスイッチが各スパインスイッチに接続されます。これによりフルメッシュ構成となります。"
    },
    {
      "id": 192,
      "category": "アーキテクチャと仮想化の概要",
      "question": "スパインリーフアーキテクチャの特徴について適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "リーフスイッチ間の各リンクは、広帯域である",
        "可変レイテンシーを提供する",
        "STPブロックポートが予測しやすい",
        "各デバイスは同じホップ数でトラフィックを通過させる"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0095.jpg",
      "answer_image": "page_0164.png",
      "explanation": "スパインリーフアーキテクチャの特徴は、各デバイスが同じホップ数でトラフィックを通過させることです。これにより予測可能な低レイテンシーを実現します。"
    },
    {
      "id": 193,
      "category": "アーキテクチャと仮想化の概要",
      "question": "追加のアクセスポートが必要な場合、スパインリーフ構成のネットワークで拡張性を保つ構成を次の選択肢の中から1つ選びなさい。",
      "choices": [
        "少なくとも40GBのアップリンクでスパインスイッチを追加",
        "スパインスイッチを追加する",
        "リーフスイッチを追加して、すべてのスパインスイッチに接続",
        "リーフスイッチは、コアスパインスイッチへの単一の接続で追加"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0095.jpg",
      "answer_image": "page_0164.png",
      "explanation": "追加のアクセスポートが必要な場合、スパインリーフ構成のネットワークで拡張性を保つには、リーフスイッチを追加して、すべてのスパインスイッチに接続します。"
    },
    {
      "id": 194,
      "category": "アーキテクチャと仮想化の概要",
      "question": "仮想化の説明として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ハイパーバイザーは単一の仮想マシンと単一のソフトウェアスイッチをサポートできる",
        "ハイパーバイザーは別のスイッチに物理的に接続されている場合に最も効率的な通信が可能",
        "ハイパーバイザーはCPUを含む物理コンポーネントを複数の仮想マシンで共有する",
        "ハイパーバイザーはレイヤ3レベルで直接スイッチと接続することができる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0095.jpg",
      "answer_image": "page_0165.png",
      "explanation": "仮想化では、ハイパーバイザーはCPUを含む物理コンポーネントを複数の仮想マシンで共有します。"
    },
    {
      "id": 195,
      "category": "アーキテクチャと仮想化の概要",
      "question": "1台のホストコンピューターで複数のオペレーティングシステムを実行できるテクノロジーはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "仮想ルーティングと転送",
        "サーバーの仮想化",
        "ネットワークポートIDの仮想化",
        "デバイスコンテキスト"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0096.jpg",
      "answer_image": "page_0165.png",
      "explanation": "1台のホストコンピューターで複数のオペレーティングシステムを実行できるテクノロジーは、サーバーの仮想化です。"
    },
    {
      "id": 196,
      "category": "アーキテクチャと仮想化の概要",
      "question": "仮想化の基本について適切な説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "論理ネットワークデバイスが仮想マシンと物理ネットワークの間でトラフィックを転送できるようにする",
        "SNMPトラフィックを監視するネットワークマネージャーとなる1つのハイパーバイザーで環境を構築する必要がある",
        "1つの物理サーバー上で複数のオペレーティングシステムとアプリケーションを個別に実行できる",
        "物理ルータが各仮想マシンのNICをネットワークに直接接続するように構成する",
        "一部のサーバー、仮想マシン、ネットワーク機器がインターネット上に存在する必要がある"
      ],
      "correct_answers": [0, 2],
      "answer_count": 2,
      "question_image": "0096.jpg",
      "answer_image": "page_0166.png",
      "explanation": "仮想化の基本は、論理ネットワークデバイスが仮想マシンと物理ネットワークの間でトラフィックを転送できるようにし、1つの物理サーバー上で複数のオペレーティングシステムとアプリケーションを個別に実行できることです。"
    },
    {
      "id": 197,
      "category": "システム モニタリングの概要",
      "question": "ルータがSyslogサーバへ通知レベルのメッセージを送信するイベントはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "インタフェースの状態が変化したとき",
        "証明書の有効期限が切れたとき",
        "TCPコネクションが切断されたとき",
        "ICMPコネクションが確立したとき"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0096.jpg",
      "answer_image": "page_0167.png",
      "explanation": "ルータがSyslogサーバへ通知レベルのメッセージを送信するイベントは、インタフェースの状態が変化したときです。"
    },
    {
      "id": 198,
      "category": "システム モニタリングの概要",
      "question": "通知レベルのSyslogを発生させるアクションを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ルートのフラッピング",
        "インタフェースのアップダウン",
        "debug",
        "ARPインスペクション"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0096.jpg",
      "answer_image": "page_0168.png",
      "explanation": "通知レベルのSyslogを発生させるアクションは、インタフェースのアップダウンです。"
    },
    {
      "id": 199,
      "category": "システム モニタリングの概要",
      "question": "以下のコマンドを実行した際にトラップされるメッセージ・シビリティを、次の選択肢の中から4つ選びなさい。\n\n(config)# logging trap 4",
      "choices": [
        "Alert",
        "Warning",
        "Debug",
        "Notice",
        "Information",
        "Emergency",
        "Error"
      ],
      "correct_answers": [1, 3, 5, 6],
      "answer_count": 4,
      "question_image": "0097.jpg",
      "answer_image": "page_0169.png",
      "explanation": "logging trap 4 コマンドは、レベル4(Warning)以上の重大度のメッセージをトラップします。つまり、Emergency(0)、Alert(1)、Critical(2)、Error(3)、Warning(4)がトラップされます。選択肢では、Warning、Notice、Emergency、Errorが該当します。"
    },
    {
      "id": 200,
      "category": "システム モニタリングの概要",
      "question": "informationalレベルのsyslogを取得するのに必要なレベル設定として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "debugging",
        "alerts",
        "critical",
        "warnings"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0097.jpg",
      "answer_image": "page_0170.png",
      "explanation": "informationalレベルのsyslogを取得するには、debugging(レベル7)を設定する必要があります。syslogでは、設定したレベル以上の重大度のメッセージが記録されます。"
    },
    {
      "id": 201,
      "category": "システム モニタリングの概要",
      "question": "SNMPエージェントの機能について適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネットワークデバイスとTACACS+またはRADIUSサーバ間のユーザ認証を調整する",
        "壊滅的なシステムイベントに関する情報をリモートネットワークノードに要求する",
        "レイヤ3デバイス間のルーティングを管理する",
        "ネットワーク管理システム(NMS)からの要求に応答して、MIB変数に関する情報を送信する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0097.jpg",
      "answer_image": "page_0170.png",
      "explanation": "SNMPエージェントの機能は、ネットワーク管理システム(NMS)からの要求に応答して、MIB変数に関する情報を送信することです。"
    },
    {
      "id": 202,
      "category": "システム モニタリングの概要",
      "question": "20台のルータのバックアップを取得したい。MIBの情報を利用することができるプロトコルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "CDP",
        "SMTP",
        "Telnet",
        "SNMP"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0098.jpg",
      "answer_image": "page_0171.png",
      "explanation": "MIBの情報を利用することができるプロトコルは、SNMP(Simple Network Management Protocol)です。"
    },
    {
      "id": 203,
      "category": "システム モニタリングの概要",
      "question": "図の構成において、R1はR2のNTPクライアントになるよう\"ntp server 172.16.10.2\"コマンドが設定されています。R2がNTPサーバーとして動作するために必要なコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "R2(config)#ntp server 2.2.2.2",
        "R2(config)#ntp passive",
        "R2(config)#ntp master 4",
        "R2(config)#ntp server 172.16.10.1"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0098.jpg",
      "answer_image": "page_0172.png",
      "has_diagram": true,
      "explanation": "R2がNTPサーバーとして動作するために必要なコマンドは、ntp master 4 です。これによりR2は自身をNTPマスターとして設定します。"
    },
    {
      "id": 204,
      "category": "シスコ デバイスの管理",
      "question": "ネットワークの運用では、TFTPはどのような機能を果たしますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ユーザ名/パスワードを利用して、サーバからスイッチへバックアップしているコンフィグレーションファイルを転送する",
        "ルータのファイルシステム間でファイルを転送する",
        "サーバからルータへIOSイメージを転送する",
        "混雑した通信回線でサーバからルータへコンフィグレーションファイルを転送するのに適している"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0098.jpg",
      "answer_image": "page_0173.png",
      "explanation": "TFTPは、サーバからルータへIOSイメージを転送する機能を果たします。"
    },
    {
      "id": 205,
      "category": "シスコ デバイスの管理",
      "question": "copy機能を使用して、ルータ構成情報のバックアップを行うことができるプロトコルとして適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "SMTP",
        "FTP",
        "SNMP",
        "TCP"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0099.jpg",
      "answer_image": "page_0174.png",
      "explanation": "copy機能を使用して、ルータ構成情報のバックアップを行うことができるプロトコルは、FTP(File Transfer Protocol)です。"
    },
    {
      "id": 206,
      "category": "シスコ デバイスの管理",
      "question": "ネットワーク管理操作におけるFTPの機能についての説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "UDPを使用してファイルを転送する",
        "データを送信する前にデータを暗号化する",
        "制御コネクションとデータコネクションを使用して、サーバとクライアント間でファイルを転送する",
        "データ転送時にセッション層で独自のサポートを提供する"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0099.jpg",
      "answer_image": "page_0174.png",
      "explanation": "FTPの機能は、制御コネクションとデータコネクションを使用して、サーバとクライアント間でファイルを転送することです。"
    },
    {
      "id": 207,
      "category": "セキュリティ脅威の状況の調査",
      "question": "個人用のIDバッジを複数の従業員で使いまわして建物に入館した場合、違反しているセキュリティプログラムはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "侵入検知",
        "物理アクセス制御",
        "ネットワークオーソライゼーション",
        "ユーザアウェアネス"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0099.jpg",
      "answer_image": "page_0175.png",
      "explanation": "個人用のIDバッジを複数の従業員で使いまわして建物に入館した場合、物理アクセス制御のセキュリティプログラムに違反しています。"
    },
    {
      "id": 208,
      "category": "セキュリティ脅威の状況の調査",
      "question": "サーバールームの入り口ドアにバッジリーダーを設置し、従業員の出入りを権限に応じて制限するセキュリティ対策はどれですか。正しいものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "役割ベースのアクセス制御",
        "物理的アクセス制御",
        "バイオメトリクス",
        "多要素認証"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0099.jpg",
      "answer_image": "page_0175.png",
      "explanation": "サーバールームの入り口ドアにバッジリーダーを設置し、従業員の出入りを権限に応じて制限するセキュリティ対策は、物理的アクセス制御です。"
    },
    {
      "id": 209,
      "category": "セキュリティ脅威の状況の調査",
      "question": "従業員に対して送信されたメールにWebリンクがあります。リンク先のWebページは安全であると表示されています。リスクとして考えられる攻撃を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ソーシャルエンジニアリング",
        "物理的アクセス制御",
        "ブルートフォース",
        "ユーザ認識攻撃(標的型攻撃)",
        "SQLインジェクション"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0100.jpg",
      "answer_image": "page_0176.png",
      "explanation": "従業員に対して送信されたメールにWebリンクがあり、リンク先のWebページは安全であると表示されている場合、ソーシャルエンジニアリングのリスクが考えられます。"
    },
    {
      "id": 210,
      "category": "脅威防御技術の実装",
      "question": "多要素認証の説明として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ユーザはユーザ名とパスワードを入力してから、モバイルデバイスの認証アプリ上の通知をクリックする",
        "RSAトークンにPINを入力してから、ログイン画面で表示されたRSAキーを入力する",
        "キーフォブをスワイプして電子メールリンクをクリックする",
        "ユーザはユーザ名とパスワードを入力して、その後の画面で認証情報を再入力する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0100.jpg",
      "answer_image": "page_0176.png",
      "explanation": "多要素認証の説明として適切なものは、ユーザがユーザ名とパスワードを入力してから、モバイルデバイスの認証アプリ上の通知をクリックすることです。"
    },
    {
      "id": 211,
      "category": "脅威防御技術の実装",
      "question": "スマートフォンの認証アプリを使用して、多要素認証でネットワークを保護したい。スマートフォンが紛失または盗難にあった場合、アプリケーションはどのように保護されるか。適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アプリケーションは、2番目の要素を提供する前にユーザが特定の場所にいることを確認する",
        "構成された期間でアプリケーションを再アクティブ化するには、管理者パスワードが必要である",
        "アプリケーションは、スマートフォンの再起動時に再アクティブ化するために管理者パスワードを要求する",
        "アプリケーションは、2番目の要素を提供する前にユーザにPINの入力を要求する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0100.jpg",
      "answer_image": "page_0177.png",
      "explanation": "スマートフォンが紛失または盗難にあった場合、アプリケーションは2番目の要素を提供する前にユーザにPINの入力を要求することで保護されます。"
    },
    {
      "id": 212,
      "category": "脅威防御技術の実装",
      "question": "独自のセキュリティポリシーを持つ個別のゾーンにネットワークを分離するデバイスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スイッチ",
        "IPS",
        "アクセスポイント",
        "ファイアウォール"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0101.jpg",
      "answer_image": "page_0177.png",
      "explanation": "独自のセキュリティポリシーを持つ個別のゾーンにネットワークを分離するデバイスは、ファイアウォールです。"
    },
    {
      "id": 213,
      "category": "脅威防御技術の実装",
      "question": "ステートフルインスペクションを実行するデバイスを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "アクセスポイント",
        "スイッチ",
        "ファイアウォール",
        "ワイヤレスコントローラ"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0101.jpg",
      "answer_image": "page_0178.png",
      "explanation": "ステートフルインスペクションを実行するデバイスは、ファイアウォールです。"
    },
    {
      "id": 214,
      "category": "脅威防御技術の実装",
      "question": "サイト間VPN構成において、元のIPパケット全体のカプセル化と暗号化を提供するIPsecモードはどれですか。正しいものを、以下の選択肢の中から1つ選びなさい。",
      "choices": [
        "ESPを使用したIPsecトランスポートモード",
        "AHを使用したIPsecトンネルモード",
        "AHを使用したIPsecトランスポートモード",
        "ESPを使用したIPsecトンネルモード"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0101.jpg",
      "answer_image": "page_0178.png",
      "explanation": "サイト間VPN構成において、元のIPパケット全体のカプセル化と暗号化を提供するIPsecモードは、ESPを使用したIPsecトンネルモードです。"
    },
    {
      "id": 215,
      "category": "脅威防御技術の実装",
      "question": "ワイヤレス認証はどこで行われますか。正しいものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "レイヤ3",
        "レイヤ1",
        "レイヤ2",
        "レイヤ4"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0101.jpg",
      "answer_image": "page_0179.png",
      "explanation": "ワイヤレス認証はレイヤ2で行われます。"
    },
    {
      "id": 216,
      "category": "脅威防御技術の実装",
      "question": "WPA2で最も適切な暗号方式を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TKIP",
        "WEP",
        "AES",
        "RC4"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0102.jpg",
      "answer_image": "page_0179.png",
      "explanation": "WPA2で最も適切な暗号方式は、AES(Advanced Encryption Standard)です。"
    },
    {
      "id": 217,
      "category": "脅威防御技術の実装",
      "question": "事前共有キーのワイヤレスネットワークWPA2の暗号化について適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TKIP with RC4",
        "AES-256",
        "RC4",
        "AES-128"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0102.jpg",
      "answer_image": "page_0180.png",
      "explanation": "事前共有キーのワイヤレスネットワークWPA2の暗号化には、AES-128が使用されます。"
    },
    {
      "id": 218,
      "category": "脅威防御技術の実装",
      "question": "ワイヤレスコントローラのGUIでWPA2-PSKを構成する際に利用できるデータ形式を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "Base 64",
        "ASCII",
        "16進数",
        "10進数",
        "2進数"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0102.jpg",
      "answer_image": "page_0180.png",
      "explanation": "ワイヤレスコントローラのGUIでWPA2-PSKを構成する際に利用できるデータ形式は、ASCIIと16進数です。"
    },
    {
      "id": 219,
      "category": "脅威防御技術の実装",
      "question": "WPA2-PSKについてASCII形式の最小文字数を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "8",
        "6",
        "12",
        "18"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0102.jpg",
      "answer_image": "page_0181.png",
      "explanation": "WPA2-PSKについてASCII形式の最小文字数は、8文字です。"
    },
    {
      "id": 220,
      "category": "脅威防御技術の実装",
      "question": "図のようなWLANコントローラのGUI管理画面でセキュリティ設定としてWPA+WPA2を選択するタブとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Security>Layer 3",
        "Security>Layer 2",
        "Security>AAA Servers",
        "Advanced",
        "General"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0103.jpg",
      "answer_image": "page_0181.png",
      "has_diagram": true,
      "explanation": "WLANコントローラのGUI管理画面でセキュリティ設定としてWPA+WPA2を選択するタブは、Security>Layer 2です。"
    },
    {
      "id": 221,
      "category": "脅威防御技術の実装",
      "question": "Wi-Fiネットワークのデータ表示を防ぐWPA3拡張機能として適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スクランブルされた暗号化キー",
        "TKIP暗号化",
        "AES暗号化",
        "SAE暗号化"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0103.jpg",
      "answer_image": "page_0182.png",
      "explanation": "Wi-Fiネットワークのデータ表示を防ぐWPA3拡張機能は、SAE(Simultaneous Authentication of Equals)暗号化です。"
    },
    {
      "id": 222,
      "category": "管理アクセスのセキュリティ保護",
      "question": "パスワードを設定後、プレーンテキストとして保存されるのを防ぐコマンドを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "enable password",
        "service password-encryption",
        "enable secret",
        "username ccna password encryp"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0103.jpg",
      "answer_image": "page_0182.png",
      "explanation": "パスワードを設定後、プレーンテキストとして保存されるのを防ぐコマンドは、service password-encryptionです。"
    },
    {
      "id": 223,
      "category": "管理アクセスのセキュリティ保護",
      "question": "service password-encryptionコマンドの効果は何ですか。適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スイッチに対する不正な接続から、VLANデータベースを保護する",
        "VPNトンネルが確立された時のパスワード交換を暗号化する",
        "管理者がクリアテキストのパスワードを構成できないようにする",
        "権限のないユーザが実行コンフィギュレーションでクリアテキストのパスワードを表示することを制限する"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0104.jpg",
      "answer_image": "page_0183.png",
      "explanation": "service password-encryptionコマンドの効果は、権限のないユーザが実行コンフィギュレーションでクリアテキストのパスワードを表示することを制限することです。"
    },
    {
      "id": 224,
      "category": "管理アクセスのセキュリティ保護",
      "question": "SSH用のRSAキーを生成するに必要な要素を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "DNSドメイン名",
        "SSHのバージョン",
        "IPルーティング",
        "ログオンパスワード"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0104.jpg",
      "answer_image": "page_0184.png",
      "explanation": "SSH用のRSAキーを生成するに必要な要素は、DNSドメイン名です。"
    },
    {
      "id": 225,
      "category": "管理アクセスのセキュリティ保護",
      "question": "SSHが正常に動作するために必要な要素を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "コンソールパスワードを設定",
        "ip domain-nameコマンド",
        "IPルーティングを有効",
        "k9(crypto)IOSイメージ",
        "Telnetを無効にする"
      ],
      "correct_answers": [1, 3],
      "answer_count": 2,
      "question_image": "0104.jpg",
      "answer_image": "page_0185.png",
      "explanation": "SSHが正常に動作するために必要な要素は、ip domain-nameコマンドとk9(crypto)IOSイメージです。"
    },
    {
      "id": 226,
      "category": "管理アクセスのセキュリティ保護",
      "question": "暗号パスワードを使用したローカル認証を4つのスイッチに設定します。4つのスイッチは、SSHアクセスもサポートする必要があります。この要件を満たすように正しく構成されているスイッチはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "SW4",
        "SW1",
        "SW2",
        "SW3"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0105.jpg",
      "answer_image": "page_0186.png",
      "has_diagram": true,
      "explanation": "暗号パスワードを使用したローカル認証とSSHアクセスをサポートするために正しく構成されているスイッチは、SW4です。SW4は、username、secret、line vty 0 15、login localの設定がされています。"
    },
    {
      "id": 227,
      "category": "管理アクセスのセキュリティ保護",
      "question": "ルータへのリモートアクセスにおいて、公開鍵+秘密鍵のペアを使用し管理トラフィックの暗号化を行うためにSSHを構成する際、使用するコマンドとして正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "crypto key generate ec keysize 2048",
        "crypto key generate rsa modulus 1024",
        "crypto key generate ec keysize 1024",
        "crypto key encrypt rsa name cisco123"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0105.jpg",
      "answer_image": "page_0187.png",
      "explanation": "ルータへのリモートアクセスにおいて、公開鍵+秘密鍵のペアを使用し管理トラフィックの暗号化を行うためにSSHを構成する際、使用するコマンドは、crypto key generate rsa modulus 1024です。"
    },
    {
      "id": 228,
      "category": "管理アクセスのセキュリティ保護",
      "question": "安全で暗号化されたリモート構成を可能にするために、スイッチSW1の管理アクセス構成を更新しています。スイッチに適用する必要があるコマンドを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "B",
        "D",
        "A",
        "C",
        "E"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0106.jpg",
      "answer_image": "page_0188.png",
      "has_diagram": true,
      "explanation": "安全で暗号化されたリモート構成を可能にするために必要なコマンドは、D(crypto key generate rsa)とA(enable secret R3mote123)です。"
    },
    {
      "id": 229,
      "category": "管理アクセスのセキュリティ保護",
      "question": "暗号化プロトコルを使用したリモート管理を許可するために、R1にSSHバージョン2を設定します。必要な設定を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0107.jpg",
      "answer_image": "page_0189.png",
      "has_diagram": true,
      "explanation": "暗号化プロトコルを使用したリモート管理を許可するために、R1にSSHバージョン2を設定するには、設定Cが正しいです。hostname、service password-encryption、crypto key generate rsa、username、ip ssh version 2、line vty、transport input sshが必要です。"
    },
    {
      "id": 230,
      "category": "管理アクセスのセキュリティ保護",
      "question": "無線LANコントローラーへの管理接続のセキュリティを強化するために無効にする必要があるプロトコルを、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "SSH",
        "TFTP",
        "Telnet",
        "HTTPS",
        "HTTP"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0108.jpg",
      "answer_image": "page_0190.png",
      "explanation": "無線LANコントローラーへの管理接続のセキュリティを強化するために無効にする必要があるプロトコルは、TelnetとHTTPです。"
    },
    {
      "id": 231,
      "category": "管理アクセスのセキュリティ保護",
      "question": "ユーザの識別、ユーザサービス、アクセス制御について、AAAの機能はどのように使用されますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "認証(Authentication)はユーザを識別し、アカウンティングはユーザのサービスの利用をトラッキングする",
        "認可(Authorization)はユーザにアクセスコントロールを付与し、認証(Authentication)はユーザのサービスの利用をトラッキングする",
        "アカウンティングはユーザのサービスの利用をトラッキングし、認証(Authentication)はアクセス権限を付与する",
        "認可(Authorization)はユーザを識別し、認証(Authentication)はアクセスコントロールを付与する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0108.jpg",
      "answer_image": "page_0191.png",
      "explanation": "AAAの機能は、認証(Authentication)がユーザを識別し、アカウンティング(Accounting)がユーザのサービスの利用をトラッキングします。"
    },
    {
      "id": 232,
      "category": "管理アクセスのセキュリティ保護",
      "question": "認証と認可の違いについて適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "認証はユーザ名とパスワードを検証し、認可は認証エージェントとユーザーデータベース間の通信を処理する",
        "認証はシステムにアクセスしようとしているユーザを識別および検証し、認可はユーザが実行できるタスクを制御する",
        "認証はシステムにアクセスしようとしているユーザを識別し、認可はユーザのパスワードを検証する",
        "認証はユーザがアクセスできるシステムプロセスを制御し、認可はユーザが開始するアクティビティを承認ログに記録する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0108.jpg",
      "answer_image": "page_0192.png",
      "explanation": "認証と認可の違いは、認証がシステムにアクセスしようとしているユーザを識別および検証し、認可がユーザが実行できるタスクを制御することです。"
    },
    {
      "id": 233,
      "category": "管理アクセスのセキュリティ保護",
      "question": "AAAの各要素と説明について適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A① B② C② D① E③ F③",
        "A② B① C① D③ E② F③",
        "A③ B① C② D③ E② F①",
        "A① B① C② D③ E② F③"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0109.jpg",
      "answer_image": "page_0193.png",
      "has_diagram": true,
      "explanation": "AAAの各要素と説明の正しい組み合わせは、A(ユーザを認証する)=①認証、B(パスワードを確認)=①認証、C(ユーザが実行できるアクセスを制御)=②認可、D(ユーザの活動記録)=③アカウンティング、E(ユーザが利用できるサービスを制限)=②認可、F(管理者に分析情報を提供)=③アカウンティング、です。"
    },
    {
      "id": 234,
      "category": "管理アクセスのセキュリティ保護",
      "question": "RADIUSとTACACS+について正しい説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TACACS+は別個の認証を使用する",
        "RADIUSはTCPを使用する",
        "RADIUSはパケット全体を暗号化する",
        "TACACS+は認証と認可を連結する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0109.jpg",
      "answer_image": "page_0194.png",
      "explanation": "RADIUSとTACACS+について正しい説明は、TACACS+が別個の認証を使用することです。TACACS+は認証、認可、アカウンティングを分離して実行します。"
    },
    {
      "id": 235,
      "category": "管理アクセスのセキュリティ保護",
      "question": "RADIUSとTACACS+の違いについて正しい記述はどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "TACACS+はパスワード情報のみを暗号化するが、RADIUSはペイロード全体を暗号化する",
        "RADIUSは管理者によって入力されたすべてのコマンドを記録するが、TACACS+では起動、終了と中間コマンドを記録する",
        "TACACS+は認証と認可を分離して実現できるが、RADIUSは認証と認可を切り離せない",
        "RADIUSはダイヤルアップ認証に最も適切だが、TACACS+はさまざまな種類の認証で利用できる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0110.jpg",
      "answer_image": "page_0195.png",
      "explanation": "RADIUSとTACACS+の違いは、TACACS+が認証と認可を分離して実現できるが、RADIUSは認証と認可を切り離せないことです。"
    },
    {
      "id": 236,
      "category": "管理アクセスのセキュリティ保護",
      "question": "ワイヤレスアクセスポイントで個別の認証および認可ソリューションをサポートするには、どのプロトコルを実装する必要がありますか。正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Kerberos",
        "RADIUS",
        "IEEE802.1X",
        "TACACS+"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0110.jpg",
      "answer_image": "page_0195.png",
      "explanation": "ワイヤレスアクセスポイントで個別の認証および認可ソリューションをサポートするには、TACACS+を実装する必要があります。"
    },
    {
      "id": 237,
      "category": "管理アクセスのセキュリティ保護",
      "question": "LANにアクセスする前に接続したデバイスの認証を行う規格を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "802.1D",
        "802.1X",
        "802.1Q",
        "802.1s"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0110.jpg",
      "answer_image": "page_0196.png",
      "explanation": "LANにアクセスする前に接続したデバイスの認証を行う規格は、802.1Xです。"
    },
    {
      "id": 238,
      "category": "管理アクセスのセキュリティ保護",
      "question": "ID情報を用いたアクセス層のセキュリティ脅威軽減手法はどれですか。適切なものを次の選択肢の中から1つ選びなさい。",
      "choices": [
        "DHCPスヌーピング",
        "DAI",
        "デフォルト以外のネイティブVLANを使用",
        "802.1X"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0111.jpg",
      "answer_image": "page_0196.png",
      "explanation": "ID情報を用いたアクセス層のセキュリティ脅威軽減手法は、802.1Xです。"
    },
    {
      "id": 239,
      "category": "デバイス強化の実装",
      "question": "デフォルトVLANに所属するスイッチの未使用ポートのセキュリティを向上させる構成を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "未使用ポート用にVLAN99を作成し、アクセスポートとして割り当てる",
        "インタフェースをシャットダウンする",
        "CDPを有効にする",
        "トランクに設定する"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0111.jpg",
      "answer_image": "page_0197.png",
      "explanation": "デフォルトVLANに所属するスイッチの未使用ポートのセキュリティを向上させる構成は、未使用ポート用にVLAN99を作成してアクセスポートとして割り当て、インタフェースをシャットダウンすることです。"
    },
    {
      "id": 240,
      "category": "デバイス強化の実装",
      "question": "ネットワーク管理者は、プリンタを接続しているスイッチのインタフェースでポートセキュリティを有効にしました。プリンタのMACアドレスを自動的に学習して保持できるようにするためには、どのように設定しますか。次の選択肢から次の選択肢の中から1つ選びなさい。",
      "choices": [
        "スタティックにMACアドレスを登録する",
        "自動MACアドレス学習を実装にする",
        "スティッキーラーニングを有効にする",
        "ダイナミックなMACアドレスラーニングを有効にする"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0111.jpg",
      "answer_image": "page_0197.png",
      "explanation": "プリンタのMACアドレスを自動的に学習して保持できるようにするには、スティッキーラーニングを有効にします。"
    },
    {
      "id": 241,
      "category": "デバイス強化の実装",
      "question": "ポートがerr-disabled状態になる原因として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ポートセキュリティ違反",
        "遅延",
        "ポートに設定されたshutdownコマンド",
        "ポートに何も接続されていない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0111.jpg",
      "answer_image": "page_0198.png",
      "explanation": "ポートがerr-disabled状態になる原因として正しいものは、ポートセキュリティ違反です。"
    },
    {
      "id": 242,
      "category": "デバイス強化の実装",
      "question": "ポートがerr-disabled状態になる原因として正しいものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "shutdownコマンド",
        "リンクフラッピング",
        "レイテンシ",
        "ポートに何も差し込まれていない"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0112.jpg",
      "answer_image": "page_0199.png",
      "explanation": "ポートがerr-disabled状態になる原因として正しいものは、リンクフラッピングです。"
    },
    {
      "id": 243,
      "category": "デバイス強化の実装",
      "question": "MACアドレスを元にスイッチに接続されるデバイスを制限しています。違反があった際、違反カウンタの増加とSNMPトラップの生成を行うためのコマンドはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "switchport port-security violation disable",
        "switchport port-security violation access",
        "switchport port-security violation protect",
        "switchport port-security violation restrict"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0112.jpg",
      "answer_image": "page_0200.png",
      "explanation": "MACアドレス違反があった際、違反カウンタの増加とSNMPトラップの生成を行うためのコマンドは、switchport port-security violation restrictです。"
    },
    {
      "id": 244,
      "category": "デバイス強化の実装",
      "question": "VLANホッピング攻撃の軽減手法について、適切な説明を次の選択肢の中から1つ選びなさい。",
      "choices": [
        "トランクポートを手動で構成し、DTPを無効にする",
        "DAIを有効にする",
        "すべてのポートをアクティブにし、デフォルトのVLANに配置する",
        "拡張VLANを構成する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0112.jpg",
      "answer_image": "page_0201.png",
      "explanation": "VLANホッピング攻撃の軽減手法は、トランクポートを手動で構成し、DTPを無効にすることです。"
    },
    {
      "id": 245,
      "category": "デバイス強化の実装",
      "question": "ダイナミックARPインスペクションによりセキュリティリスクを軽減できる攻撃タイプはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "マルウェア",
        "ワーム",
        "中間者攻撃",
        "DDoS"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0112.jpg",
      "answer_image": "page_0202.png",
      "explanation": "ダイナミックARPインスペクションによりセキュリティリスクを軽減できる攻撃タイプは、中間者攻撃です。"
    },
    {
      "id": 246,
      "category": "デバイス強化の実装",
      "question": "以下のセキュリティ設定の動作として適切なものを、次の選択肢の中から1つ選択しなさい。",
      "choices": [
        "スイッチインターフェイスの信頼状態がuntrustedになる",
        "インターフェイスが別のスイッチに接続されるまで、スイッチポートは管理上ダウンのままとなる",
        "ARP ACLがないため、動的ARPインスペクションは無効となる",
        "スイッチポートは、着信パケットを信頼するが信頼しないように設定されるまでダウンのままである"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0113.jpg",
      "answer_image": "page_0203.png",
      "has_diagram": true,
      "explanation": "以下のセキュリティ設定の動作として適切なのは、スイッチインターフェイスの信頼状態がuntrustedになることです。"
    },
    {
      "id": 247,
      "category": "デバイス強化の実装",
      "question": "以下のセキュリティ設定の効果として適切なものを、次の選択肢の中から1つ選択しなさい。",
      "choices": [
        "インターフェイスが信頼されていないため、すべての入力・出力トラフィックが破棄される",
        "スイッチは、すべてのARPフレームを破棄する",
        "スイッチは、無効なMAC-IPアドレスバインディングを持つすべての入力ARPフレームを破棄する",
        "送信先がDHCPサーバの場合のみ、フレームを通過させる"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0113.jpg",
      "answer_image": "page_0204.png",
      "has_diagram": true,
      "explanation": "以下のセキュリティ設定の効果として適切なのは、スイッチが無効なMAC-IPアドレスバインディングを持つすべての入力ARPフレームを破棄することです。"
    },
    {
      "id": 248,
      "category": "デバイス強化の実装",
      "question": "正常に動作しているネットワークにおいて、スイッチに図のような設定がされています。このスイッチのFastEthernet 0/1インタフェースにはどのようなデバイスが接続されますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ハブ",
        "DHCPクライアント",
        "PC",
        "ルータ"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0114.jpg",
      "answer_image": "page_0205.png",
      "has_diagram": true,
      "explanation": "ip arp inspection trustの設定がされているため、このインタフェースには信頼できるデバイス、つまりDHCPクライアントが接続されます。"
    },
    {
      "id": 249,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "ネットワークを自動化するメリットとして適切なものを、次の選択肢の中から2つ選択しなさい。",
      "choices": [
        "省スペース",
        "ネットワークの変更に迅速に対応できる",
        "運用コストを削減することができる",
        "セキュリティが向上する",
        "ネットワーク障害の発生頻度を低下できる"
      ],
      "correct_answers": [1, 2],
      "answer_count": 2,
      "question_image": "0114.jpg",
      "answer_image": "page_0205.png",
      "explanation": "ネットワークを自動化するメリットは、ネットワークの変更に迅速に対応でき、運用コストを削減することができることです。"
    },
    {
      "id": 250,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "SDNコントローラによって集中管理されるプレーンを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "サービスプレーン",
        "データプレーン",
        "コントロールプレーン",
        "ポリシープレーン"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0114.jpg",
      "answer_image": "page_0206.png",
      "explanation": "SDNコントローラによって集中管理されるプレーンは、コントロールプレーンです。"
    },
    {
      "id": 251,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "従来のネットワークと比較した場合のコントローラベースのネットワークの利点について正しい説明を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "コントローラベースは管理機能を一元化するが、従来型では管理機能は分散している",
        "コントローラベースはネットワーク構成の複雑さを軽減し、従来型はエラーの可能性を高める",
        "コントローラベースでは、従来型のネットワークの負荷を軽減しながら、帯域幅の使用量を増加させる",
        "従来型では個別のライセンスコストを削減するが、コントローラベースではソフトウェアコストを増大させる",
        "コントローラベースではネットワーク障害を減らすことができるが、従来型では障害発生率は増加する"
      ],
      "correct_answers": [0, 1],
      "answer_count": 2,
      "question_image": "0115.jpg",
      "answer_image": "page_0206.png",
      "explanation": "コントローラベースのネットワークの利点は、管理機能を一元化し、ネットワーク構成の複雑さを軽減することです。"
    },
    {
      "id": 252,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "コントローラベースのネットワークと従来型のネットワークの特性の正しい組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A→1, B→2, C→1, D→2, E→1, F→2",
        "A→1, B→2, C→2, D→1, E→1, F→2",
        "A→1, B→2, C→2, D→1, E→2, F→1",
        "A→2, B→1, C→2, D→1, E→1, F→2",
        "A→2, B→1, C→2, D→1, E→2, F→1"
      ],
      "correct_answers": [4],
      "answer_count": 1,
      "question_image": "0115.jpg",
      "answer_image": "page_0207.png",
      "has_diagram": true,
      "explanation": "コントローラベースのネットワークと従来型のネットワークの特性の正しい組み合わせは、A(ネットワーク中心)→2(従来型)、B(デバイス中心)→1(コントローラベース)、C(コンフィギュレーション設定)→2(従来型)、D(ポリシー設定)→1(コントローラベース)、E(ホワイトリストセキュリティモデル)→2(従来型)、F(ブラックリストセキュリティモデル)→1(コントローラベース)です。"
    },
    {
      "id": 253,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "レイヤ2の到達可能性とレイヤ3のルーティング情報を提供することにより、ネットワークデバイスがパケット転送の決定を行うことを支援するソフトウェア定義アーキテクチャプレーンは何ですか。適切なものを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "マネジメントプレーン",
        "データプレーン",
        "ポリシープレーン",
        "コントロールプレーン"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0116.jpg",
      "answer_image": "page_0208.png",
      "explanation": "レイヤ2の到達可能性とレイヤ3のルーティング情報を提供することにより、ネットワークデバイスがパケット転送の決定を行うことを支援するソフトウェア定義アーキテクチャプレーンは、コントロールプレーンです。"
    },
    {
      "id": 254,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "コントローラベースのネットワークアーキテクチャにおけるノースバウンドAPIの目的を、次の選択肢から1つ選びなさい。",
      "choices": [
        "コントローラと物理ネットワークのハードウェア間の通信を提供する",
        "コントローラとアプリケーション間の通信を容易にする",
        "デバイスエラーをコントローラに報告する",
        "ネットワークハードウェアとトラフィックの統計を生成する"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0116.jpg",
      "answer_image": "page_0208.png",
      "explanation": "コントローラベースのネットワークアーキテクチャにおけるノースバウンドAPIの目的は、コントローラとアプリケーション間の通信を容易にすることです。"
    },
    {
      "id": 255,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "コントローラベースのネットワークアーキテクチャにおいて、サウスバウンドAPIの役割はなんですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "ネットワークハードウェアとコントローラ間で通信する",
        "アプリケーションの開発者がネットワークとインタラクトできるようにする",
        "コントローラと他の自動化オーケストレーションツールを統合する",
        "アプリケーションとコントローラ間で通信する"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0116.jpg",
      "answer_image": "page_0209.png",
      "explanation": "コントローラベースのネットワークアーキテクチャにおいて、サウスバウンドAPIの役割は、ネットワークハードウェアとコントローラ間で通信することです。"
    },
    {
      "id": 256,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "SDN(Software Defined Network)のAPIであるノースバウンドAPIとサウスバウンドAPIについて、適切な説明を2つ選びなさい。",
      "choices": [
        "ふたつのAPIともに、SAL(Service Abstraction Layer:サービス抽象化層)を使用する",
        "ノースバウンドAPIだけが、ネットワークのプログラム制御ができる",
        "ノースバウンドAPIだけが、SAL(Service Abstraction Layer:サービス抽象化層)を使用する",
        "サウスバウンドAPIだけが、ネットワークのプログラム制御ができる",
        "ふたつのAPIともに、ネットワークのプログラム制御ができる",
        "サウスバウンドAPIだけが、SAL(Service Abstraction Layer:サービス抽象化層)を使用する"
      ],
      "correct_answers": [2, 4],
      "answer_count": 2,
      "question_image": "0117.jpg",
      "answer_image": "page_0210.png",
      "explanation": "SDNのAPIについて、ノースバウンドAPIだけがSAL(Service Abstraction Layer:サービス抽象化層)を使用し、ふたつのAPIともにネットワークのプログラム制御ができます。"
    },
    {
      "id": 257,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "SDNコントローラーとアプリケーション間の通信に適したテクノロジーはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "Southbound API",
        "OpenFlow",
        "NETCONF",
        "REST API"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0117.jpg",
      "answer_image": "page_0211.png",
      "explanation": "SDNコントローラーとアプリケーション間の通信に適したテクノロジーは、REST APIです。"
    },
    {
      "id": 258,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "REST APIリクエストが成功した後に返されるHTTPステータスコードはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "200",
        "301",
        "404",
        "500"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0117.jpg",
      "answer_image": "page_0211.png",
      "explanation": "REST APIリクエストが成功した後に返されるHTTPステータスコードは、200です。"
    },
    {
      "id": 259,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "REST APIで利用できるエンコード方式を、次の選択肢の中から2つ選びなさい。",
      "choices": [
        "SGML",
        "YAML",
        "XML",
        "EBCDIC",
        "md5",
        "JSON"
      ],
      "correct_answers": [2, 5],
      "answer_count": 2,
      "question_image": "0118.jpg",
      "answer_image": "page_0212.png",
      "explanation": "REST APIで利用できるエンコード方式は、XMLとJSONです。"
    },
    {
      "id": 260,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "JSONについて適切な説明を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "情報の保存に使用",
        "定義済みのタグまたは山括弧()を使用して、マークアップテキストを区切る",
        "配列を含む構造化データの記述に使用",
        "HTMLと同様、XMLよりも冗長"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0118.jpg",
      "answer_image": "page_0213.png",
      "explanation": "JSONについて適切な説明は、配列を含む構造化データの記述に使用されることです。"
    },
    {
      "id": 261,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "JSONデータのフォーマットとして正しいものはどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "B",
        "C",
        "D",
        "A"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0119.jpg",
      "answer_image": "page_0214.png",
      "has_diagram": true,
      "explanation": "JSONデータのフォーマットとして正しいものは、Bです。JSONでは、オブジェクトは{}で囲み、配列は[]で囲みます。"
    },
    {
      "id": 262,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "適切なJSONファイルを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "D",
        "B",
        "C",
        "A"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0120.jpg",
      "answer_image": "page_0215.png",
      "has_diagram": true,
      "explanation": "適切なJSONファイルは、Bです。JSONでは、文字列は\"\"で囲み、key:value形式で記述します。"
    },
    {
      "id": 263,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "属性と値がペアとなり、なおかつ順序をもたないJSONデータ型はどれですか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "文字列",
        "配列",
        "オブジェクト",
        "ブール値"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0120.jpg",
      "answer_image": "page_0216.png",
      "explanation": "属性と値がペアとなり、なおかつ順序をもたないJSONデータ型は、オブジェクトです。"
    },
    {
      "id": 264,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "各構成ツールに該当する適切な項目を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "A② B① C③ D① E③ F②",
        "A① B① C③ D② E③ F②",
        "A③ B① C① D② E③ F②",
        "A① B② C③ D① E③ F②"
      ],
      "correct_answers": [3],
      "answer_count": 1,
      "question_image": "0121.jpg",
      "answer_image": "page_0217.png",
      "has_diagram": true,
      "explanation": "各構成ツールに該当する適切な組み合わせは、A(リモートアクセスにSSH)=①Ansible、B(YAML形式)=②Chef、C(マニフェストに保存)=③Puppet、D(Rubyを使用)=①Ansible、E(TCP8140)=③Puppet、F(TCP10002)=②Chef、です。"
    },
    {
      "id": 265,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "デバイス管理について、説明と種類の適切な組み合わせを、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "1 – A、B、F   2 – C、D、E",
        "1 – C、E、F   2 – A、B、D",
        "1 – B、C、F   2 – A、D、E",
        "1 – A、C、E   2 – B、D、F"
      ],
      "correct_answers": [2],
      "answer_count": 1,
      "question_image": "0122.jpg",
      "answer_image": "page_0218.png",
      "has_diagram": true,
      "explanation": "デバイス管理の適切な組み合わせは、1(Cisco DNA Centerデバイス管理)がB(デバイスごとに構成を管理する)、C(クラウドを監視し、ソフトウェアアップデートを確認する)、F(NetFlowを使用してネットワークの潜在的な脅威を分析し、適切なアクションを実行する)で、2(従来型デバイス管理)がA(SSH経由で変更を行う)、D(セキュリティは、ファイアウォール、VPN、IPSを使用して、ネットワーク境界で管理される)、E(CLIテンプレートを使用して、複数のデバイスに一貫した設定を適用する)です。"
    },
    {
      "id": 266,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "Cisco DNA Centerによる管理が従来のネットワーク管理と異なる点を、次の選択肢の中から1つ選びなさい。",
      "choices": [
        "実際のデバイス構成からポリシーを抽象化",
        "モジュール設計により、組織の特定のニーズを満たすために異なるバージョンを実装可能",
        "ネットワーク要素の自動検出をサポート",
        "管理機能の高可用性をサポートしない"
      ],
      "correct_answers": [0],
      "answer_count": 1,
      "question_image": "0122.jpg",
      "answer_image": "page_0219.png",
      "explanation": "Cisco DNA Centerによる管理が従来のネットワーク管理と異なる点は、実際のデバイス構成からポリシーを抽象化することです。"
    },
    {
      "id": 267,
      "category": "ソフトウェア定義型ネットワーキング",
      "question": "展開に関して、従来のキャンパスデバイス管理とCisco DNA Centerデバイス管理はどのように異なりますか。次の選択肢の中から1つ選びなさい。",
      "choices": [
        "従来のキャンパスデバイス管理は、Cisco DNA Centerデバイス管理よりも迅速にネットワークを拡張できる",
        "Cisco DNA Centerデバイス管理は、従来のキャンパス管理よりも迅速にネットワークを展開できる",
        "Cisco DNA Centerデバイス管理は、従来のキャンパス管理よりも低コストで実装できる",
        "従来のキャンパスデバイス管理は、Cisco DNA Centerデバイス管理よりも迅速にパッチやソフトウェア更新を展開できる"
      ],
      "correct_answers": [1],
      "answer_count": 1,
      "question_image": "0123.jpg",
      "answer_image": "page_0220.png",
      "explanation": "展開に関して、Cisco DNA Centerデバイス管理は、従来のキャンパス管理よりも迅速にネットワークを展開できます。"
    }
  ]
};

// ===============================================================================
// NOTE: This file now contains ALL 267 questions COMPLETE!
// Questions are distributed across images 0007.jpg through 0092.jpg
// Total questions: 問題1 through 問題267
//
// COMPLETED: Questions 1-180 (180 questions complete)
// REMAINING WORK: Questions 181-267 need to be added (87 questions remaining)
//
// Each question follows this structure:
// {
//   "id": sequential question number (1-267),
//   "category": topic category from the question header,
//   "question": the question text in Japanese,
//   "choices": array of choice strings,
//   "correct_answers": array of 0-indexed correct choice indices,
//   "answer_count": number of correct answers to select (1, 2, 3, etc.),
//   "question_image": filename like "0XXX.jpg",
//   "answer_image": filename like "page_XXXX.png",
//   "has_diagram": (optional) true if question includes a diagram/figure,
//   "explanation": explanation text in Japanese
// }
//
// Categories seen so far:
// - ネットワーキングの機能について
// - TCP/IP リンク レイヤについて
// - TCP/IP インターネット レイヤ、IPv4アドレシング、およびサブネットの概要
// - TCP/IPトランスポート レイヤおよびアプリケーション レイヤの説明
// - ルーティングの機能について
// - Ciscoルータの設定
// - 簡易ネットワークのトラブルシューティング
// - 基本的なIPv6の概要
// - スタティックルーティングの設定
// - VLANとトランクの実装
// - VLAN 間のルーティング
// - OSPFの概要
// - 兄弟スイッチド トポロジの構築
// - EtherChannelによる兄弟スイッチド トポロジの改善
// - レイヤ 3 の冗長性の調査
// - WAN テクノロジーの概要
// - ACLの基本
// - インターネット接続の有効化
// - QoS の概要
// - ワイヤレスの基礎
//
// To continue adding questions:
// 1. Read the remaining images (0065.jpg onwards)
// 2. Extract question number and category from the header
// 3. Extract question text and all choices
// 4. Identify correct answer count from "正解を X つ選択" header
// 5. Map to appropriate answer image file (page_XXXX.png)
// 6. Add explanation based on the answer key
// ===============================================================================
