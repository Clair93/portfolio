/* ================================================================
   배경에 흐르는 코드 (IDE 스타일 배경)
   ----------------------------------------------------------------
   · 그냥 C# 코드를 적으면 됩니다. 색상은 자동으로 입혀집니다.
   · // 로 시작하는 줄은 주석 색으로 표시됩니다.
   ================================================================ */
const BACKGROUND_CODE = `// SnowMan's Revenge · Spawner.cs
public class Spawner : MonoBehaviour {
    public GameObject snowManPrefab;
    private float spawnRate = 2.5f;

    void Update() {
        timer += Time.deltaTime;
        if (timer >= spawnRate) {
            spawnRate = Random.Range(1f, 3f);
            Instantiate(snowManPrefab, RandomPos(), Quaternion.identity);
            timer = 0f;
        }
    }
}

// Player.cs · 물고기 아이템 → 3초 무적
void OnTriggerEnter(Collider other) {
    if (other.CompareTag("Fish")) StartCoroutine(Invincible());
}
IEnumerator Invincible() {
    isInvincible = true;
    yield return new WaitForSeconds(3f);
    isInvincible = false;
}

// 위인런 · BackgroundLoop.cs
void Update() {
    if (transform.position.x <= -width)
        transform.position += Vector3.right * width * 2f;
}

// VR Bowling · BallReset.cs
private Vector3 socketPos;
void Start() => socketPos = transform.position;
void FixedUpdate() {
    if (Vector3.Distance(socketPos, transform.position) > resetDist)
        ReturnToSocket();
}

// VR Beat Saber · SongSelect.cs
audioSource.clip = song.previewClip;
audioSource.Play();

// DustEcho · WeaponData.cs
[CreateAssetMenu(menuName = "Data/Weapon")]
public class WeaponData : ScriptableObject {
    public int maxAmmo = 30;
    public float fireRate = 0.1f;
}
`;
